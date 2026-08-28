# Plano de Implementação: Landing Page Resina Extreme (Mobile-First & COD)

Este documento estabelece a arquitetura de conversão, copy de resposta direta, identidade visual e estrutura técnica em Next.js/React e Tailwind CSS para o produto físico automotivo **Resina Extreme (500ml)**.

---

## 1. Diagnóstico do Projeto & Arquitetura de Conversão

### Público-Alvo e Mercado
- **Perfil:** Homens 35+ anos no Brasil, proprietários e entusiastas de carros, motos e caminhões.
- **Canal de Tráfego:** Tráfego frio de anúncios (Meta Ads, Google, TikTok).
- **Voz e Tom:** Masculino, direto, sóbrio, técnico e focado em economia de tempo, dinheiro e orgulho pelo veículo.
- **Objeção Principal:** Medo de golpes na internet e ceticismo com produtos milagrosos.
- **Alavanca Principal de Conversão:** **Pagamento na Entrega (Cash on Delivery - COD)** — Eliminação total de risco financeiro online ("Pague somente ao receber em mãos").
- **Ângulo Técnico Honesto:** Finalizador e protetor de alto desempenho (efeito vitrificação, hidrorrepelência extrema, 8-10 aplicações por frasco de 500ml, proteção UV/chuva ácida, durabilidade de 1-2 meses). Não promete recuperar verniz já queimado ou riscos profundos.

---

## 2. Decisões de Design & UI System

- **Estilo:** *Dark Automotive Tech / Industrial Sleek* (adaptado do Dark SaaS para estética automotiva de alta tecnologia).
- **Paleta de Cores:**
  - **Fundo Principal:** `bg-[#090a0f]`, `bg-[#0f111a]`, `bg-[#141724]` com bordas metálicas `border-zinc-800` e detalhes em fibra de carbono / gradientes sutis.
  - **Destaque Primário (CTA & Urgência):** Dourado / Âmbar Automotivo (`#f59e0b` / `#d97706` com hover `#fbbf24`), remetendo ao brilho de showroom e acabamento premium.
  - **Destaque de Confiança (COD & Garantia):** Verde Esmeralda (`#10b981` / `#059669`), reforçando segurança de pagamento na entrega e envio garantido.
  - **Tipografia:** Sans-serif forte, densa e legível em telas mobile pequenas (Inter / Roboto), com títulos em caixa alta e alto contraste.

---

## 3. Estrutura e Ordem das Seções (Framework PAS + AIDA para COD)

1. **Barra de Aviso / Anúncio Superior (Top Trust Bar):**
   - Aviso de Pagamento na Entrega com Frete Grátis e estoque limitado.
2. **Hero Section (Mobile-First / High Impact):**
   - Badge de Confiança: "🛡️ COMPRA 100% SEGURA • PAGUE APENAS NA ENTREGA".
   - Headline H1 com ganho claro e quebra de padrão.
   - Subheadline com nanotecnologia e durabilidade.
   - Micro-provas sociais (4.9/5 estrelas, +14.800 clientes).
   - CTA Primário ("QUERO RECEBER E PAGAR NA ENTREGA").
   - Container de Mídia do Produto com badges dinâmicos (500ml, 8-10 carros, Super Hidrorrepelente).
3. **Seção de Problema e Agitação (PAS):**
   - Comparativo do custo abusivo de polimentos em estética (R$ 800 a R$ 2.000) vs. cansaço de ceras em pasta que duram pouco e mancham plásticos.
4. **Apresentação da Solução & Autoridade Técnica (AIDA - Interest):**
   - Apresentação da **Resina Extreme 500ml**.
   - Grid de diferenciais técnicos com dados reais da ficha técnica.
   - Bloco de Honestidade & Transparência Técnica (clareza sobre limites do produto).
5. **Showcase Interativo de Antes & Depois e Demonstrações de Mídia:**
   - Tabs/Cards interativos: Capô Meio a Meio, Teste de Hidrorrepelência (água escorrendo), Proteção em Motos e Caminhões.
   - Placeholders otimizados para vídeos e fotos de alta resolução.
6. **Passo a Passo de Aplicação em 3 Etapas Simples:**
   - 1. Lave e seque -> 2. Borrife -> 3. Lustre com microfibra (15 minutos).
7. **Prova Social e Depoimentos de Clientes Reais:**
   - Avaliações autênticas com fotos, tempo de uso e veículos reais de clientes 35+.
8. **Tabela de Oferta / Seleção de Kits com Formulário Dinâmico de COD:**
   - Kit 1 (1 Frasco - 500ml), Kit 2 Mais Vendido (2 Frascos + Brinde Flanela Microfibra), Kit 3 Super Econômico (3 Frascos + 2 Flanelas + Frete Grátis).
   - Formulário de Pedido COD Integrado (Nome, WhatsApp, Endereço Completo, Seleção de Kit).
   - Infográfico explicativo do fluxo COD (1. Peça sem pagar nada -> 2. Despachamos com rastreio -> 3. Pague ao entregador em dinheiro ou cartão).
9. **Garantia Blindada de Satisfação & Reversão de Risco:**
   - Selo de garantia e política clara.
10. **FAQ Interativo (Perguntas Frequentes) com Schema FAQPage (JSON-LD):**
    - 7 dúvidas cruciais de tráfego frio respondidas diretamente.
11. **Barra Fixa Flutuante no Mobile (Sticky Bottom Bar):**
    - Sempre visível em smartphones no scroll, com chamada rápida para o checkout COD.
12. **Rodapé Completo:**
    - CNPJ, Termos, Política de Privacidade, Selos de Segurança e aviso legal.

---

## 4. Plano de Arquivos a Serem Criados

| Arquivo | Descrição |
|---|---|
| `package.json` | Configuração do projeto Next.js / React, Tailwind CSS e dependências de ícones (Lucide React) |
| `tailwind.config.js` | Configuração de tema escuro automotivo, cores e animações |
| `postcss.config.js` | Configuração do PostCSS para Tailwind |
| `tsconfig.json` | Configuração TypeScript |
| `app/layout.tsx` | Layout raiz com meta tags SEO, Open Graph e fontes |
| `app/page.tsx` | Página principal da landing page integrando todos os componentes |
| `app/globals.css` | Estilos globais, efeitos de brilho metálico, animações de pulso e responsividade |
| `components/HeroSection.tsx` | Seção Hero mobile-first com badges de COD e CTA direto |
| `components/ProblemSection.tsx` | Seção de Problema e Agitação |
| `components/FeaturesSection.tsx` | Especificações e diferenciais técnicos da ficha |
| `components/BeforeAfterShowcase.tsx` | Mídia de demonstração e antes/depois interativo |
| `components/HowToUseSection.tsx` | 3 passos práticos de aplicação |
| `components/TestimonialsSection.tsx` | Depoimentos e provas sociais |
| `components/OfferSection.tsx` | Seleção de kits e formulário de Pagamento na Entrega (COD) |
| `components/CodHowItWorks.tsx` | Explicação de segurança do modelo Pague ao Receber |
| `components/GuaranteeSection.tsx` | Garantia de satisfação |
| `components/FaqSection.tsx` | FAQ com accordion e dados estruturados JSON-LD |
| `components/StickyMobileCta.tsx` | CTA flutuante para smartphones |
| `components/Footer.tsx` | Rodapé com CNPJ, políticas e links de rodapé |

---

## 5. Plano de Verificação

### Verificação de Código e Execução
1. Instalar dependências (`npm install` ou estrutura standalone compatível).
2. Executar validação de build / TypeScript com `npx next build` ou validação de sintaxe.
3. Verificar renderização mobile e desktop (responsividade, contraste, hierarquia).
4. Conferir todos os pontos do checklist de SEO (H1 único, meta description, alt text, JSON-LD, tags de viewport).
