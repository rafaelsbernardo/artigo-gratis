import React, { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';

const SignupForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [blogWp, setBlogWp] = useState('');
  const [blogGeraReceita, setBlogGeraReceita] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const { toast } = useToast();

  // Para os campos ocultos do Mautic
  const [location, setLocation] = useState('');
  const [device, setDevice] = useState('');
  const [currentUrl, setCurrentUrl] = useState('');
  const [utmSource, setUtmSource] = useState('');
  const [utmMedium, setUtmMedium] = useState('');
  const [utmCampaign, setUtmCampaign] = useState('');
  const [utmContent, setUtmContent] = useState('');
  const [utmTerm, setUtmTerm] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [referrer, setReferrer] = useState('');
  const [userAgent, setUserAgent] = useState('');
  const [screenResolution, setScreenResolution] = useState('');
  const [timeZone, setTimeZone] = useState('');
  const [clickId, setClickId] = useState('');
  
  const EBOOK_URL = 'https://cadz.automatikblog.com';
  const ONE_WEEK_MS = 7 * 24 * 60 * 60 * 1000;

  // Função para ler o cookie exatamente como está
  const getCookieRaw = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    return (parts.length === 2) ? parts.pop()?.split(';').shift() : '';
  };

  // Carrega o script do Mautic
  useEffect(() => {
    if (typeof window.MauticSDKLoaded === 'undefined') {
      window.MauticSDKLoaded = true;
      const head = document.getElementsByTagName('head')[0];
      const script = document.createElement('script');
      script.type = 'text/javascript';
      script.src = 'https://mautic.automatiklabs.com/media/js/mautic-form.js?ve1eb61ac';
      script.onload = function() {
        if (window.MauticSDK) {
          window.MauticSDK.onLoad();
        }
      };
      head.appendChild(script);
      window.MauticDomain = 'https://mautic.automatiklabs.com';
      window.MauticLang = {
        'submittingMessage': "Por favor, aguarde..."
      };
    } else if (window.MauticSDK) {
      window.MauticSDK.onLoad();
    }

    // Função para obter dados de localização
    const obterLocalizacao = async () => {
      try {
        const response = await fetch("https://ipinfo.io/json");
        const data = await response.json();
        setCity(data.city || '');
        setState(data.region || '');
        setCountry(data.country || '');
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    // Função para detectar o sistema operacional
    const detectarSistemaOperacional = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as any)['opera'];
      if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
      }
      if (/win/i.test(userAgent)) {
        return "Windows";
      }
      if (/android/i.test(userAgent)) {
        return "Android";
      }
      if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any)['MSStream']) {
        return "iOS";
      }
      if (/macintosh/i.test(userAgent)) {
        return "Mac OS";
      }
      if (/linux/i.test(userAgent)) {
        return "Linux";
      }
      return "Desconhecido";
    };

    // Função para obter parâmetros UTM da URL
    const obterParametrosUTM = () => {
      const urlParams = new URLSearchParams(window.location.search);
      setUtmSource(urlParams.get('utm_source') || '');
      setUtmMedium(urlParams.get('utm_medium') || '');
      setUtmCampaign(urlParams.get('utm_campaign') || '');
      setUtmContent(urlParams.get('utm_content') || '');
      setUtmTerm(urlParams.get('utm_term') || '');
      setClickId(getCookieRaw('mcclickid-store') || '');
    };

    // Executar funções
    obterLocalizacao();
    setDevice(detectarSistemaOperacional());
    obterParametrosUTM();
  }, []);
  
  useEffect(() => {
    // Detectar dispositivo e user agent
    setUserAgent(navigator.userAgent);
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      setDevice('mobile');
    } else {
      setDevice('desktop');
    }
    
    // Screen resolution
    setScreenResolution(`${window.screen.width}x${window.screen.height}`);
    
    // URL atual e referrer
    setCurrentUrl(window.location.href);
    setReferrer(document.referrer);
  }, []);

  // Verificar se o formulário foi enviado nos últimos 7 dias
  useEffect(() => {
    const lastSubmitted = localStorage.getItem('signupFormSubmittedAt');
    if (lastSubmitted && Date.now() - Number(lastSubmitted) < ONE_WEEK_MS) {
      setFormSubmitted(true);
    } else if (lastSubmitted) {
      // Limpa registro caso tenha expirado
      localStorage.removeItem('signupFormSubmittedAt');
    }
  }, []);

  // Função para preencher campos
  const preencherCampos = (data, sistemaOperacional, parametrosUTM) => {
    setLocation(data.city || '');
    setDevice(sistemaOperacional);
    setCurrentUrl(parametrosUTM.url_cadastro);
    setUtmSource(parametrosUTM.utm_source);
    setUtmMedium(parametrosUTM.utm_medium);
    setUtmCampaign(parametrosUTM.utm_campaign);
    setUtmContent(parametrosUTM.utm_content);
    setUtmTerm(parametrosUTM.utm_term);
    setCity(data.city || '');
    setState(data.region || '');
    setCountry(data.country || '');
    setReferrer(document.referrer);
    setUserAgent(navigator.userAgent);
    setScreenResolution(`${window.screen.width}x${window.screen.height}`);
    setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Verifica se o formulário já foi enviado na última semana
    const lastSubmitted = localStorage.getItem('signupFormSubmittedAt');
    if (lastSubmitted && Date.now() - Number(lastSubmitted) < ONE_WEEK_MS) {
      toast({
        title: "Formulário já enviado",
        description: "Você já enviou o formulário nos últimos 7 dias.",
        variant: "destructive",
      });
      setFormSubmitted(true);
      return;
    }

    setIsSubmitting(true);
    
    try {
      // Preencher os campos do formulário do Mautic
      const formElement = document.getElementById('mauticform_appteste') as HTMLFormElement;
      if (formElement) {
        const nameInput = document.getElementById('mauticform_input_appteste_nome') as HTMLTextAreaElement;
        const emailInput = document.getElementById('mauticform_input_appteste_email') as HTMLInputElement;
        const phoneInput = document.getElementById('mauticform_input_appteste_telefone') as HTMLTextAreaElement;
        const blogWpSelect = document.getElementById('mauticform_input_appteste_app_blogwp') as HTMLSelectElement;
        const blogGeraReceitaSelect = document.getElementById('mauticform_input_appteste_blog_gera_receita') as HTMLSelectElement;
        const utmSourceInput = document.getElementById('mauticform_input_appteste_utm_source') as HTMLTextAreaElement;
        const utmMediumInput = document.getElementById('mauticform_input_appteste_utm_medium') as HTMLTextAreaElement;
        const utmCampaignInput = document.getElementById('mauticform_input_appteste_utm_campaign') as HTMLTextAreaElement;
        const utmContentInput = document.getElementById('mauticform_input_appteste_utm_content') as HTMLTextAreaElement;
        const utmTermInput = document.getElementById('mauticform_input_appteste_utm_term') as HTMLTextAreaElement;
        const cityInput = document.getElementById('mauticform_input_appteste_cidade') as HTMLTextAreaElement;
        const stateInput = document.getElementById('mauticform_input_appteste_estado') as HTMLTextAreaElement;
        const countryInput = document.getElementById('mauticform_input_appteste_pais') as HTMLTextAreaElement;
        const deviceInput = document.getElementById('mauticform_input_appteste_dispositivo') as HTMLTextAreaElement;
        const urlInput = document.getElementById('mauticform_input_appteste_url_pagina') as HTMLTextAreaElement;
        const appPlanoInput = document.getElementById('mauticform_input_appteste_app_plano') as HTMLInputElement;
        const clickIdInput = document.getElementById('mauticform_input_appteste_clickid') as HTMLInputElement;

        if (nameInput) nameInput.value = name;
        if (emailInput) emailInput.value = email;
        if (phoneInput) phoneInput.value = whatsapp;
        if (blogWpSelect) blogWpSelect.value = blogWp;
        if (blogGeraReceitaSelect) blogGeraReceitaSelect.value = blogGeraReceita;
        if (utmSourceInput) utmSourceInput.value = utmSource;
        if (utmMediumInput) utmMediumInput.value = utmMedium;
        if (utmCampaignInput) utmCampaignInput.value = utmCampaign;
        if (utmContentInput) utmContentInput.value = utmContent;
        if (utmTermInput) utmTermInput.value = utmTerm;
        if (cityInput) cityInput.value = city;
        if (stateInput) stateInput.value = state;
        if (countryInput) countryInput.value = country;
        if (deviceInput) deviceInput.value = device;
        if (urlInput) urlInput.value = currentUrl;
        if (appPlanoInput) {
          if (blogWp === 'Sim') {
            // Sempre enviar para teste grátis independente da resposta sobre receita
            appPlanoInput.value = 'https://app.automatikblog.com/testegratis';
          } else {
            const desqualifica = blogGeraReceita === 'Ainda não, mas estou montando a estratégia' || blogGeraReceita === 'Ainda não tenho blog';
            appPlanoInput.value = desqualifica
              ? EBOOK_URL // Lead sem monetização ou sem blog → e-book
              : EBOOK_URL; // Mantém mesmo redirecionamento para e-book/cadastro
          }
        }
        if (clickIdInput) {
          const cookieClickId = getCookieRaw('mcclickid-store');
          clickIdInput.value = cookieClickId || clickId;
        }

        // Enviar o formulário do Mautic
        formElement.submit();
        
        // Marcar o formulário como enviado e registrar timestamp
        setFormSubmitted(true);
        localStorage.setItem('signupFormSubmittedAt', Date.now().toString());
        
        toast({
          title: "Formulário enviado com sucesso!",
          description: "Você será redirecionado para a próxima etapa onde poderá informar os detalhes do seu artigo.",
        });
      }
    } catch (error) {
      console.error('Erro ao enviar o formulário:', error);
      toast({
        title: "Erro ao enviar formulário",
        description: "Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const formatWhatsApp = (value: string) => {
    // Remove tudo que não é número
    const numbers = value.replace(/\D/g, '');
    
    // Aplica a máscara (xx) xxxxx-xxxx
    if (numbers.length <= 2) {
      return `(${numbers}`;
    } else if (numbers.length <= 7) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`;
    } else if (numbers.length <= 11) {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`;
    } else {
      return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`;
    }
  };

  const handleWhatsAppChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setWhatsapp(formatWhatsApp(e.target.value));
  };

  return (
    <section id="cadastro" className="py-20 bg-gradient-cta">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="bg-white rounded-xl shadow-lg p-8 md:p-12 max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4">Gere seu artigo grátis agora</h2>
            <p className="text-gray-700">
              Preencha o formulário abaixo para experimentar o Automatik Blog e receber seu artigo no WhatsApp
            </p>
          </div>
          
          {formSubmitted ? (
            <div className="text-center py-8">
              <h3 className="text-2xl font-semibold text-green-600 mb-4">Formulário Enviado com Sucesso!</h3>
              <p className="text-gray-700">Você será redirecionado para a próxima etapa onde poderá informar os detalhes do seu artigo.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Nome completo
                </label>
                <input
                  id="name"
                  placeholder="Digite seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Digite seu melhor e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium text-gray-700 mb-1">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  placeholder="(00) 00000-0000"
                  value={whatsapp}
                  onChange={handleWhatsAppChange}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2"
                />
              </div>
              
              <div>
                <label htmlFor="blogwp" className="block text-sm font-medium text-gray-700 mb-1">
                  Você tem blog em WordPress?
                </label>
                <select 
                  id="blogwp"
                  value={blogWp}
                  onChange={(e) => setBlogWp(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Sim">Sim</option>
                  <option value="Não">Não</option>
                  <option value="interesse em criar">Não, mas pretendo criar</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="blogGeraReceita" className="block text-sm font-medium text-gray-700 mb-1">
                  Você já ganha dinheiro com seu blog ou pretende monetizar?
                </label>
                <select 
                  id="blogGeraReceita"
                  value={blogGeraReceita}
                  onChange={(e) => setBlogGeraReceita(e.target.value)}
                  required
                  className="w-full border border-gray-300 rounded-md px-3 py-2 bg-white"
                >
                  <option value="">Selecione uma opção</option>
                  <option value="Já ganho atualmente">Já ganho atualmente</option>
                  <option value="Ainda não, mas estou montando a estratégia">Ainda não, mas estou montando a estratégia</option>
                  <option value="Tenho blog, mas não pretendo monetizar">Tenho blog, mas não pretendo monetizar</option>
                  <option value="Ainda não tenho blog">Ainda não tenho blog</option>
                </select>
              </div>
              
              <button 
                type="submit" 
                className="w-full bg-gradient-to-r from-[#24CCAA] to-[#6D48FF] text-white text-lg py-4 rounded-lg font-medium hover:opacity-90 transition-opacity"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Processando..." : "Quero gerar meu artigo grátis"}
              </button>
              
              <p className="text-xs text-gray-500 text-center">
                Ao clicar no botão acima, você concorda com nossa <a href="https://automatikblog.com/politica-de-privacidade/" target="_blank" rel="noopener noreferrer" className="underline">Política de Privacidade</a> e com o recebimento de comunicações.
              </p>
            </form>
          )}
          
          {/* Formulário do Mautic oculto */}
          <div className="hidden">
            <div id="mauticform_wrapper_appteste" className="mauticform_wrapper">
              <form autoComplete="false" role="form" method="post" action="https://mautic.automatiklabs.com/form/submit?formId=12" id="mauticform_appteste" data-mautic-form="appteste" encType="multipart/form-data">
                <div className="mauticform-error" id="mauticform_appteste_error"></div>
                <div className="mauticform-message" id="mauticform_appteste_message"></div>
                <div className="mauticform-innerform">
                  <div className="mauticform-page-wrapper mauticform-page-1" data-mautic-form-page="1">
                    <div id="mauticform_appteste_nome" className="mauticform-row mauticform-text mauticform-field-1">
                      <textarea id="mauticform_input_appteste_nome" name="mauticform[nome]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_email" data-validate="email" data-validation-type="email" className="mauticform-row mauticform-email mauticform-field-2 mauticform-required">
                      <input id="mauticform_input_appteste_email" name="mauticform[email]" value="" className="mauticform-input" type="email" />
                    </div>
                    <div id="mauticform_appteste_telefone" data-validate="telefone" data-validation-type="textarea" className="mauticform-row mauticform-text mauticform-field-3 mauticform-required">
                      <textarea id="mauticform_input_appteste_telefone" name="mauticform[telefone]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_utm_source" className="mauticform-row mauticform-text mauticform-field-4">
                      <textarea id="mauticform_input_appteste_utm_source" name="mauticform[utm_source]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_utm_campaign" className="mauticform-row mauticform-text mauticform-field-5">
                      <textarea id="mauticform_input_appteste_utm_campaign" name="mauticform[utm_campaign]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_utm_medium" className="mauticform-row mauticform-text mauticform-field-6">
                      <textarea id="mauticform_input_appteste_utm_medium" name="mauticform[utm_medium]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_utm_content" className="mauticform-row mauticform-text mauticform-field-7">
                      <textarea id="mauticform_input_appteste_utm_content" name="mauticform[utm_content]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_utm_term" className="mauticform-row mauticform-text mauticform-field-8">
                      <textarea id="mauticform_input_appteste_utm_term" name="mauticform[utm_term]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_cidade" className="mauticform-row mauticform-text mauticform-field-9">
                      <textarea id="mauticform_input_appteste_cidade" name="mauticform[cidade]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_estado" className="mauticform-row mauticform-text mauticform-field-10">
                      <textarea id="mauticform_input_appteste_estado" name="mauticform[estado]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_pais" className="mauticform-row mauticform-text mauticform-field-11">
                      <textarea id="mauticform_input_appteste_pais" name="mauticform[pais]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_dispositivo" className="mauticform-row mauticform-text mauticform-field-12">
                      <textarea id="mauticform_input_appteste_dispositivo" name="mauticform[dispositivo]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_url_pagina" className="mauticform-row mauticform-text mauticform-field-13">
                      <textarea id="mauticform_input_appteste_url_pagina" name="mauticform[url_pagina]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_app_blogwp" data-validate="app_blogwp" data-validation-type="select" className="mauticform-row mauticform-select mauticform-field-14 mauticform-required">
                      <select id="mauticform_input_appteste_app_blogwp" name="mauticform[app_blogwp]" value="" className="mauticform-selectbox">
                        <option value=""></option>
                        <option value="Sim">Sim</option>
                        <option value="Não">Não</option>
                        <option value="interesse em criar">Não, mas pretendo criar</option>
                      </select>
                    </div>
                    <div id="mauticform_appteste_blog_gera_receita" data-validate="blog_gera_receita" data-validation-type="select" className="mauticform-row mauticform-select mauticform-field-16 mauticform-required">
                      <select id="mauticform_input_appteste_blog_gera_receita" name="mauticform[blog_gera_receita]" value="" className="mauticform-selectbox">
                        <option value="">Selecione uma opção</option>
                        <option value="Já ganho atualmente">Já ganho atualmente</option>
                        <option value="Ainda não, mas estou montando a estratégia">Ainda não, mas estou montando a estratégia</option>
                        <option value="Tenho blog, mas não pretendo monetizar">Tenho blog, mas não pretendo monetizar</option>
                        <option value="Ainda não tenho blog">Ainda não tenho blog</option>
                      </select>
                    </div>
                    <div id="mauticform_appteste_app_plano" className="mauticform-row mauticform-text mauticform-field-15">
                      <input id="mauticform_input_appteste_app_plano" name="mauticform[app_plano]" value="" className="mauticform-input" type="text" />
                    </div>
                    <div id="mauticform_appteste_referrer" className="mauticform-row mauticform-text">
                      <textarea id="mauticform_input_appteste_referrer" name="mauticform[referrer]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_user_agent" className="mauticform-row mauticform-text">
                      <textarea id="mauticform_input_appteste_user_agent" name="mauticform[user_agent]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_screen_resolution" className="mauticform-row mauticform-text">
                      <textarea id="mauticform_input_appteste_screen_resolution" name="mauticform[screen_resolution]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_timezone" className="mauticform-row mauticform-text">
                      <textarea id="mauticform_input_appteste_timezone" name="mauticform[timezone]" className="mauticform-textarea"></textarea>
                    </div>
                    <div id="mauticform_appteste_clickid" className="mauticform-row mauticform-text">
                      <input id="mauticform_input_appteste_clickid" name="mauticform[clickid]" value="" className="mauticform-input" type="text" />
                    </div>
                    <div id="mauticform_appteste_submit" className="mauticform-row mauticform-button-wrapper mauticform-field-16">
                      <button type="submit" name="mauticform[submit]" id="mauticform_input_appteste_submit" value="" className="mauticform-button btn btn-default">Enviar</button>
                    </div>
                  </div>
                </div>
                <input type="hidden" name="mauticform[formId]" id="mauticform_appteste_id" value="12" />
                <input type="hidden" name="mauticform[return]" id="mauticform_appteste_return" value="" />
                <input type="hidden" name="mauticform[formName]" id="mauticform_appteste_name" value="appteste" />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignupForm;