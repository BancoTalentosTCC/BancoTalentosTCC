import {Seed} from '../seed.js';

Tags = new Mongo.Collection('tags');

Meteor.methods({
  seedCollection( collection ) {
    Seed( 'Tags', {
      data: [  
        {  
          "value":".NET Compact Framework"
        },
        {  
          "value":".NET Framework"
        },
        {  
          "value":".NET para Web"
        },
        {  
          "value":".NET Remoting"
        },
        {  
          "value":"1ShoppingCart"
        },
        {  
          "value":"A2Billing"
        },
        {  
          "value":"Ableton Live"
        },
        {  
          "value":"Abstract Window Toolkit (AWT)"
        },
        {  
          "value":"Absynth"
        },
        {  
          "value":"AccountMate"
        },
        {  
          "value":"ACDSee"
        },
        {  
          "value":"ACID Pro"
        },
        {  
          "value":"Acrobat"
        },
        {  
          "value":"Acrobat X"
        },
        {  
          "value":"Acronis"
        },
        {  
          "value":"ACT!"
        },
        {  
          "value":"Actian"
        },
        {  
          "value":"ActionScript"
        },
        {  
          "value":"ActionScript 3"
        },
        {  
          "value":"Active Directory"
        },
        {  
          "value":"ActiveX"
        },
        {  
          "value":"ActiveX Data Objects (ADO)"
        },
        {  
          "value":"Ada"
        },
        {  
          "value":"Adianti Framework"
        },
        {  
          "value":"ADK"
        },
        {  
          "value":"Administração"
        },
        {  
          "value":"Administração de Redes"
        },
        {  
          "value":"ADO.NET"
        },
        {  
          "value":"ADO.NET Entity Framework"
        },
        {  
          "value":"Adobe AIR"
        },
        {  
          "value":"Adobe Audition"
        },
        {  
          "value":"Adobe Bridge"
        },
        {  
          "value":"Adobe Captivate"
        },
        {  
          "value":"Adobe Captivate 5"
        },
        {  
          "value":"Adobe Catalyst"
        },
        {  
          "value":"Adobe Connect"
        },
        {  
          "value":"Adobe Creative Suite"
        },
        {  
          "value":"Adobe CS5"
        },
        {  
          "value":"Adobe Discover"
        },
        {  
          "value":"Adobe Flash Player"
        },
        {  
          "value":"Adobe Genesis"
        },
        {  
          "value":"Adobe Insight"
        },
        {  
          "value":"Adobe Lightroom"
        },
        {  
          "value":"Adobe Master Colletion CS5"
        },
        {  
          "value":"Adobe Merchandising"
        },
        {  
          "value":"Adobe OnLocation"
        },
        {  
          "value":"Adobe Premiere"
        },
        {  
          "value":"Adobe Premiere Elements"
        },
        {  
          "value":"Adobe Premiere Express"
        },
        {  
          "value":"Adobe Publish"
        },
        {  
          "value":"Adobe Recommendations"
        },
        {  
          "value":"Adobe SearchCenter"
        },
        {  
          "value":"Adobe SiteSearch"
        },
        {  
          "value":"Adobe Survey"
        },
        {  
          "value":"Adobe Web Fonts"
        },
        {  
          "value":"ADVA"
        },
        {  
          "value":"Advergames"
        },
        {  
          "value":"Advert Games"
        },
        {  
          "value":"AdWords"
        },
        {  
          "value":"Aerografia"
        },
        {  
          "value":"After Effects"
        },
        {  
          "value":"AGAL"
        },
        {  
          "value":"Agilidade"
        },
        {  
          "value":"Agronegócio"
        },
        {  
          "value":"AISC"
        },
        {  
          "value":"AIX"
        },
        {  
          "value":"AJAX"
        },
        {  
          "value":"Alemão Básico"
        },
        {  
          "value":"Algoritmo"
        },
        {  
          "value":"Amazon Kindle"
        },
        {  
          "value":"Amazon Web Services"
        },
        {  
          "value":"Ambientes"
        },
        {  
          "value":"AMQP"
        },
        {  
          "value":"Análise de Métricas"
        },
        {  
          "value":"Análise de Projetos"
        },
        {  
          "value":"Análise de Requisitos"
        },
        {  
          "value":"Análise Semiótica"
        },
        {  
          "value":"Android"
        },
        {  
          "value":"AngularJS"
        },
        {  
          "value":"Animação"
        },
        {  
          "value":"Animação 2D"
        },
        {  
          "value":"Animação 3D"
        },
        {  
          "value":"ANSI C"
        },
        {  
          "value":"ANSYS"
        },
        {  
          "value":"AP Style Writing"
        },
        {  
          "value":"APAC"
        },
        {  
          "value":"Apache"
        },
        {  
          "value":"Apache Solr"
        },
        {  
          "value":"Aplicações Desktop"
        },
        {  
          "value":"Apple Developer"
        },
        {  
          "value":"Apple Script"
        },
        {  
          "value":"Apresentador"
        },
        {  
          "value":"Apresentador de TV"
        },
        {  
          "value":"Apuração"
        },
        {  
          "value":"Aquarela"
        },
        {  
          "value":"Aquisições"
        },
        {  
          "value":"Archicad"
        },
        {  
          "value":"ARCserve"
        },
        {  
          "value":"Arduino"
        },
        {  
          "value":"ARM"
        },
        {  
          "value":"Arquitetura"
        },
        {  
          "value":"Arquitetura de Informação"
        },
        {  
          "value":"Arquitetura de Software"
        },
        {  
          "value":"Arquivologia"
        },
        {  
          "value":"Arte e Artesanato"
        },
        {  
          "value":"Arqueologia"
        },
        {  
          "value":"Arte-Final"
        },
        {  
          "value":"Artes Plásticas"
        },
        {  
          "value":"Artigos"
        },
        {  
          "value":"Artigos Acadêmicos"
        },
        {  
          "value":"Artigos de Ficção"
        },
        {  
          "value":"Artigos de Turismo"
        },
        {  
          "value":"Artigos Esportivos"
        },
        {  
          "value":"Artigos Médicos"
        },
        {  
          "value":"ArtRage Studio Pro"
        },
        {  
          "value":"AS2"
        },
        {  
          "value":"AS3"
        },
        {  
          "value":"ASIO"
        },
        {  
          "value":"ASME"
        },
        {  
          "value":"ASP"
        },
        {  
          "value":"Asp.Net"
        },
        {  
          "value":"ASP.NET MVC"
        },
        {  
          "value":"Assessoria de Imprensa"
        },
        {  
          "value":"Assistencia de Direção"
        },
        {  
          "value":"Assistente de Direção"
        },
        {  
          "value":"Assistente Virtual"
        },
        {  
          "value":"Atendimento"
        },
        {  
          "value":"Atendimento a Cliente"
        },
        {  
          "value":"Atendimento Ao Publico"
        },
        {  
          "value":"Ativação"
        },
        {  
          "value":"ATL"
        },
        {  
          "value":"Atualização De Site"
        },
        {  
          "value":"Audacity"
        },
        {  
          "value":"Audit"
        },
        {  
          "value":"Authorware 7"
        },
        {  
          "value":"AutoCAD"
        },
        {  
          "value":"Autodesk Inventor"
        },
        {  
          "value":"AVEVA PDMS"
        },
        {  
          "value":"AVID"
        },
        {  
          "value":"Avid Media Composer"
        },
        {  
          "value":"AWeber"
        },
        {  
          "value":"AWK"
        },
        {  
          "value":"Azure"
        },
        {  
          "value":"Balsamiq"
        },
        {  
          "value":"Banco De Dados"
        },
        {  
          "value":"Beleza"
        },
        {  
          "value":"Bilíngue"
        },
        {  
          "value":"Blackberry"
        },
        {  
          "value":"Blender 3D"
        },
        {  
          "value":"Blog"
        },
        {  
          "value":"BMC Remedy"
        },
        {  
          "value":"Boa Escrita"
        },
        {  
          "value":"Book Writing"
        },
        {  
          "value":"Bookdesign"
        },
        {  
          "value":"Boujou"
        },
        {  
          "value":"BPO"
        },
        {  
          "value":"Brush"
        },
        {  
          "value":"ETL"
        },
        {  
          "value":"Esol"
        },
        {  
          "value":"Espanhol"
        },
        {  
          "value":"Estampas"
        },
        {  
          "value":"Estatísticas"
        },
        {  
          "value":"Estratégia de Conteúdo"
        },
        {  
          "value":"Excel"
        },
        {  
          "value":"Experiência do Usuário"
        },
        {  
          "value":"Access"
        },
        {  
          "value":"Outlook"
        },
        {  
          "value":"Extjs"
        },
        {  
          "value":"Extranets"
        },
        {  
          "value":"FL Studio"
        },
        {  
          "value":"Facebook"
        },
        {  
          "value":"Facebook API"
        },
        {  
          "value":"Book Writing"
        },
        {  
          "value":"Fdt"
        },
        {  
          "value":"Fechamento De Arquivo"
        },
        {  
          "value":"Figurino"
        },
        {  
          "value":"FileMaker"
        },
        {  
          "value":"Final Cut Pro"
        },
        {  
          "value":"Final Cut Pro 7"
        },
        {  
          "value":"Final Cut Studio"
        },
        {  
          "value":"Finalização"
        },
        {  
          "value":"Finanças"
        },
        {  
          "value":"Firefox"
        },
        {  
          "value":"Fireworks"
        },
        {  
          "value":"Fireworks CS5"
        },
        {  
          "value":"Flash"
        },
        {  
          "value":"Flash Access"
        },
        {  
          "value":"Flash Builder"
        },
        {  
          "value":"Flash Catalyst"
        },
        {  
          "value":"Flash Media Live Encoder"
        },
        {  
          "value":"Flash Media Playback"
        },
        {  
          "value":"Flash Media Server"
        },
        {  
          "value":"Flash Platform Services"
        },
        {  
          "value":"Flash Professional CS5"
        },
        {  
          "value":"Flash Remoting MX"
        },
        {  
          "value":"Flash Video Streaming Services"
        },
        {  
          "value":"Flex"
        },
        {  
          "value":"Flickr API"
        },
        {  
          "value":"Focus Group"
        },
        {  
          "value":"Follow-up"
        },
        {  
          "value":"Font Folio"
        },
        {  
          "value":"Fontographer"
        },
        {  
          "value":"Force.Com Developer"
        },
        {  
          "value":"Formulários"
        },
        {  
          "value":"Fortran"
        },
        {  
          "value":"Fotografia Artística"
        },
        {  
          "value":"Fotografia Automobilística"
        },
        {  
          "value":"Fotografia De Aviões"
        },
        {  
          "value":"Fotografia De Casamento"
        },
        {  
          "value":"Fotografia Infantil"
        },
        {  
          "value":"Fotografia Institucional"
        },
        {  
          "value":"Fotografia Publicitária"
        },
        {  
          "value":"Fotografia Still"
        },
        {  
          "value":"Fotografia de Arquitetura"
        },
        {  
          "value":"Fotografia de Espetáculos"
        },
        {  
          "value":"Fotografia de Esportes"
        },
        {  
          "value":"Fotografia de Estúdio"
        },
        {  
          "value":"Fotografia de Eventos"
        },
        {  
          "value":"Fotografia de Jóias"
        },
        {  
          "value":"Fotografia de Moda"
        },
        {  
          "value":"Fotografia de Natureza"
        },
        {  
          "value":"Fotografia de Produto"
        },
        {  
          "value":"Fotografia de Retratos"
        },
        {  
          "value":"Fotografia de Shows"
        },
        {  
          "value":"Fotografia de Teatro"
        },
        {  
          "value":"Fotojornalismo"
        },
        {  
          "value":"Foursquare"
        },
        {  
          "value":"FrameMaker"
        },
        {  
          "value":"FrameMaker Server"
        },
        {  
          "value":"Framework JavaScript"
        },
        {  
          "value":"Francês"
        },
        {  
          "value":"FreeHand"
        },
        {  
          "value":"Front-End"
        },
        {  
          "value":"Fóruns"
        },
        {  
          "value":"GIT"
        },
        {  
          "value":"GPS"
        },
        {  
          "value":"GWT"
        },
        {  
          "value":"Geolocalização"
        },
        {  
          "value":"Geolocation"
        },
        {  
          "value":"Gerenciamento De Conteúdo"
        },
        {  
          "value":"Gerenciamento de Contas"
        },
        {  
          "value":"Gerenciamento de Equipes"
        },
        {  
          "value":"Gerenciamento de Produtos"
        },
        {  
          "value":"Gerenciamento de Projetos"
        },
        {  
          "value":"Gestão"
        },
        {  
          "value":"Gestão Da Marca"
        },
        {  
          "value":"Gestão De Pessoas"
        },
        {  
          "value":"Gestão de Comunicação"
        },
        {  
          "value":"Gestão de Contas a Pagar"
        },
        {  
          "value":"Gestão de Contas a Receber"
        },
        {  
          "value":"Ghostwriting"
        },
        {  
          "value":"Gimp"
        },
        {  
          "value":"GitHub"
        },
        {  
          "value":"Golang"
        },
        {  
          "value":"Google Adsense"
        },
        {  
          "value":"Google Analytics"
        },
        {  
          "value":"Google Appengine"
        },
        {  
          "value":"Google Apps"
        },
        {  
          "value":"Google Earth"
        },
        {  
          "value":"Google Googles"
        },
        {  
          "value":"Google Maps API"
        },
        {  
          "value":"Google OpenSocial"
        },
        {  
          "value":"Google Plus"
        },
        {  
          "value":"Google SketchUp"
        },
        {  
          "value":"Google Web Toolkit"
        },
        {  
          "value":"Grails"
        },
        {  
          "value":"Groovy"
        },
        {  
          "value":"Guerrilha Publicitária"
        },
        {  
          "value":"HP Openview"
        },
        {  
          "value":"HTML"
        },
        {  
          "value":"HTML5"
        },
        {  
          "value":"HTTP Dynamic Streaming"
        },
        {  
          "value":"Haml"
        },
        {  
          "value":"Haskell"
        },
        {  
          "value":"Hibernate"
        },
        {  
          "value":"Hiper-Realismo"
        },
        {  
          "value":"Histórias em Quadrinhos"
        },
        {  
          "value":"Hootsuite"
        },
        {  
          "value":"Hypershot"
        },
        {  
          "value":"IBM Tivoli"
        },
        {  
          "value":"IIS"
        },
        {  
          "value":"IoT"
        },
        {  
          "value":"ISO9001"
        },
        {  
          "value":"Iconografia"
        },
        {  
          "value":"Identidade Visual"
        },
        {  
          "value":"Idiom"
        },
        {  
          "value":"Ilha de Edição"
        },
        {  
          "value":"Illustrator"
        },
        {  
          "value":"Illustrator CS5"
        },
        {  
          "value":"Iluminação"
        },
        {  
          "value":"Ilustração"
        },
        {  
          "value":"Ilustração Conceitual"
        },
        {  
          "value":"Ilustração Digital"
        },
        {  
          "value":"Ilustração a mão-livre"
        },
        {  
          "value":"Ilustração de Moda"
        },
        {  
          "value":"Implementação ATM"
        },
        {  
          "value":"Impressos"
        },
        {  
          "value":"Impressão 3D"
        },
        {  
          "value":"Impressão Digital"
        },
        {  
          "value":"InContext Editing"
        },
        {  
          "value":"InCopy"
        },
        {  
          "value":"InDesign"
        },
        {  
          "value":"InDesign CS5"
        },
        {  
          "value":"Inglês"
        },
        {  
          "value":"Inglês Avançado"
        },
        {  
          "value":"Inglês Fluente"
        },
        {  
          "value":"Ink Skape"
        },
        {  
          "value":"Inovador"
        },
        {  
          "value":"Instalação de Blog"
        },
        {  
          "value":"Instalação de Script"
        },
        {  
          "value":"Integração"
        },
        {  
          "value":"Integração de eCommerce"
        },
        {  
          "value":"Intranet"
        },
        {  
          "value":"Italiano"
        },
        {  
          "value":"J2EE"
        },
        {  
          "value":"J2ME"
        },
        {  
          "value":"JBoss"
        },
        {  
          "value":"JRun"
        },
        {  
          "value":"JSF"
        },
        {  
          "value":"JSP"
        },
        {  
          "value":"Japonês"
        },
        {  
          "value":"Java"
        },
        {  
          "value":"Java Swing"
        },
        {  
          "value":"JavaEE"
        },
        {  
          "value":"JavaFX"
        },
        {  
          "value":"JavaScript"
        },
        {  
          "value":"Jingles"
        },
        {  
          "value":"Joalheria"
        },
        {  
          "value":"Joomla"
        },
        {  
          "value":"Jornal"
        },
        {  
          "value":"Jornalismo Corporativo"
        },
        {  
          "value":"Jornalismo Cultural"
        },
        {  
          "value":"Jornalismo De Moda"
        },
        {  
          "value":"Jornalismo Econômico"
        },
        {  
          "value":"Jornalismo Esportivo"
        },
        {  
          "value":"Jornalismo Feminino"
        },
        {  
          "value":"Jornalismo Literário"
        },
        {  
          "value":"Jornalismo Político"
        },
        {  
          "value":"JSON"
        },
        {  
          "value":"Keynote"
        },
        {  
          "value":"Keyshot"
        },
        {  
          "value":"Knockout"
        },
        {  
          "value":"Kuler"
        },
        {  
          "value":"LMS"
        },
        {  
          "value":"LaTeX"
        },
        {  
          "value":"LabVIEW"
        },
        {  
          "value":"Layout"
        },
        {  
          "value":"Layout de Blogs"
        },
        {  
          "value":"Legendagem"
        },
        {  
          "value":"Less"
        },
        {  
          "value":"Lettering"
        },
        {  
          "value":"Levantamento de Requisitos"
        },
        {  
          "value":"Liderança"
        },
        {  
          "value":"Lightroom"
        },
        {  
          "value":"Ligthroom 3"
        },
        {  
          "value":"Link Building"
        },
        {  
          "value":"Linux"
        },
        {  
          "value":"LiveCycle Enterprise Suite"
        },
        {  
          "value":"Livros e Revistas"
        },
        {  
          "value":"Locução"
        },
        {  
          "value":"Logic"
        },
        {  
          "value":"Logic Pro"
        },
        {  
          "value":"Logística"
        },
        {  
          "value":"Lotus Notes"
        },
        {  
          "value":"Lógica"
        },
        {  
          "value":"MVC"
        },
        {  
          "value":"Mac OS"
        },
        {  
          "value":"Mac OS X"
        },
        {  
          "value":"Magento"
        },
        {  
          "value":"Magix Edit Studio"
        },
        {  
          "value":"Magix Samplitude"
        },
        {  
          "value":"Mandarim"
        },
        {  
          "value":"Manipulação de Imagens"
        },
        {  
          "value":"Marketing"
        },
        {  
          "value":"Marketing Direto"
        },
        {  
          "value":"Marketing Político"
        },
        {  
          "value":"Marketing de Conteúdo"
        },
        {  
          "value":"Matemática"
        },
        {  
          "value":"Maya"
        },
        {  
          "value":"Media Training"
        },
        {  
          "value":"Melodyne Studio"
        },
        {  
          "value":"Mercado Financeiro"
        },
        {  
          "value":"Mestre de Cerimônias"
        },
        {  
          "value":"Metodologias ágeis"
        },
        {  
          "value":"Microsoft Access"
        },
        {  
          "value":"Microsoft Exchange"
        },
        {  
          "value":"Microsoft Expression"
        },
        {  
          "value":"Microsoft Project"
        },
        {  
          "value":"Microsoft Visio"
        },
        {  
          "value":"Microsoft Xna"
        },
        {  
          "value":"Mobile"
        },
        {  
          "value":"Mocha"
        },
        {  
          "value":"Mockup"
        },
        {  
          "value":"Mockup Digital"
        },
        {  
          "value":"Moda"
        },
        {  
          "value":"Modelagem 3D"
        },
        {  
          "value":"Modo 501"
        },
        {  
          "value":"Monitoramento"
        },
        {  
          "value":"Moodle"
        },
        {  
          "value":"Mootools"
        },
        {  
          "value":"Motion"
        },
        {  
          "value":"Motion Design"
        },
        {  
          "value":"Moulage"
        },
        {  
          "value":"Movie-Magic"
        },
        {  
          "value":"Mpeg Streamclip"
        },
        {  
          "value":"Mudbox"
        },
        {  
          "value":"MySQL"
        },
        {  
          "value":"MySpace"
        },
        {  
          "value":"Métodos ágeis"
        },
        {  
          "value":"Mídia Impressa"
        },
        {  
          "value":"Mídias Sociais"
        },
        {  
          "value":"Naming"
        },
        {  
          "value":"Narrações"
        },
        {  
          "value":"Neuromarketing"
        },
        {  
          "value":"Newsletters"
        },
        {  
          "value":"Nginx"
        },
        {  
          "value":"Nhibernate"
        },
        {  
          "value":"NoSQL Couch & Mongo"
        },
        {  
          "value":"NodeJS"
        },
        {  
          "value":"Nokia"
        },
        {  
          "value":"Nuendo"
        },
        {  
          "value":"Nuke"
        },
        {  
          "value":"Nusphere"
        },
        {  
          "value":"Nutrição"
        },
        {  
          "value":"OO"
        },
        {  
          "value":"OSCommerce"
        },
        {  
          "value":"Objective C"
        },
        {  
          "value":"Omnigraffle"
        },
        {  
          "value":"Open Cart"
        },
        {  
          "value":"Operação de Câmera"
        },
        {  
          "value":"Oracle"
        },
        {  
          "value":"Organização"
        },
        {  
          "value":"Organização de Eventos"
        },
        {  
          "value":"Orientação a Objetos"
        },
        {  
          "value":"Ourivesaria"
        },
        {  
          "value":"Output Designer"
        },
        {  
          "value":"Ovation"
        },
        {  
          "value":"PDF"
        },
        {  
          "value":"PHP"
        },
        {  
          "value":"PDV"
        },
        {  
          "value":"PHP5"
        },
        {  
          "value":"PL/SQL"
        },
        {  
          "value":"PLC & SCADA"
        },
        {  
          "value":"PPV3D"
        },
        {  
          "value":"PSD para HTML"
        },
        {  
          "value":"Pacote Adobe"
        },
        {  
          "value":"Pacote Office"
        },
        {  
          "value":"PagSeguro"
        },
        {  
          "value":"Pagamento por Cartão de Crédito"
        },
        {  
          "value":"PageMaker"
        },
        {  
          "value":"Paint Tool Sai"
        },
        {  
          "value":"Palm"
        },
        {  
          "value":"Papelaria"
        },
        {  
          "value":"Papervision3D"
        },
        {  
          "value":"Parallels Desktop"
        },
        {  
          "value":"Particle Ilusion"
        },
        {  
          "value":"Pauta"
        },
        {  
          "value":"Paypal API"
        },
        {  
          "value":"PeopleSoft"
        },
        {  
          "value":"Perl"
        },
        {  
          "value":"Pesquisa"
        },
        {  
          "value":"Pesquisa Científica"
        },
        {  
          "value":"Pesquisa Iconográfica"
        },
        {  
          "value":"Pesquisa de Campo"
        },
        {  
          "value":"Pesquisa de Marketing"
        },
        {  
          "value":"Pesquisa de Mercado"
        },
        {  
          "value":"Pftrack"
        },
        {  
          "value":"Photofiltre"
        },
        {  
          "value":"Photomatix"
        },
        {  
          "value":"Photoshop"
        },
        {  
          "value":"Photoshop Actions"
        },
        {  
          "value":"Photoshop CS5"
        },
        {  
          "value":"Pinnacle Studio"
        },
        {  
          "value":"Pintura Acrílica"
        },
        {  
          "value":"Planejamento"
        },
        {  
          "value":"Planejamento de Comunicação"
        },
        {  
          "value":"Planejamento de Divulgações"
        },
        {  
          "value":"Planejamento de Eventos"
        },
        {  
          "value":"Planejamento de Marketing"
        },
        {  
          "value":"Planejamento de Mídia"
        },
        {  
          "value":"Planejamento e Compra de Anúncios"
        },
        {  
          "value":"Plano de Mídia"
        },
        {  
          "value":"Plesk"
        },
        {  
          "value":"Plone"
        },
        {  
          "value":"Podcast"
        },
        {  
          "value":"Polonês"
        },
        {  
          "value":"Pontual"
        },
        {  
          "value":"Portais"
        },
        {  
          "value":"Portais Corporativos"
        },
        {  
          "value":"Poser"
        },
        {  
          "value":"Poser 8"
        },
        {  
          "value":"Postgis"
        },
        {  
          "value":"PostgreSQL"
        },
        {  
          "value":"Premiere Pro"
        },
        {  
          "value":"Presenter"
        },
        {  
          "value":"Prestashop"
        },
        {  
          "value":"ProTools"
        },
        {  
          "value":"Processing"
        },
        {  
          "value":"Produção"
        },
        {  
          "value":"Produção Cultural"
        },
        {  
          "value":"Produção Cultural"
        },
        {  
          "value":"Produção De Moda"
        },
        {  
          "value":"Produção Gráfica"
        },
        {  
          "value":"Produção de Elenco"
        },
        {  
          "value":"Produção de Externa"
        },
        {  
          "value":"Produção de Objetos"
        },
        {  
          "value":"Produção de TV"
        },
        {  
          "value":"Produção de Video"
        },
        {  
          "value":"Professor"
        },
        {  
          "value":"Programação C"
        },
        {  
          "value":"Programação C#"
        },
        {  
          "value":"Programação C++"
        },
        {  
          "value":"Programação Documentada"
        },
        {  
          "value":"Programação Orientada a Objetos"
        },
        {  
          "value":"Projeto Editorial"
        },
        {  
          "value":"Projeto Gráfico"
        },
        {  
          "value":"Projetos Especiais"
        },
        {  
          "value":"Prolog"
        },
        {  
          "value":"Promob"
        },
        {  
          "value":"Proofreading"
        },
        {  
          "value":"Propaganda"
        },
        {  
          "value":"Prototipagem"
        },
        {  
          "value":"Prototipação"
        },
        {  
          "value":"Prototype"
        },
        {  
          "value":"Pré-Impressão"
        },
        {  
          "value":"Pró-ativo"
        },
        {  
          "value":"Psicologia"
        },
        {  
          "value":"Publicação"
        },
        {  
          "value":"Publicação de Anúncios"
        },
        {  
          "value":"Publicidade"
        },
        {  
          "value":"Python"
        },
        {  
          "value":"QA / Testes"
        },
        {  
          "value":"QR Code"
        },
        {  
          "value":"QuarkXPress"
        },
        {  
          "value":"Radiojornalismo"
        },
        {  
          "value":"Rapidez"
        },
        {  
          "value":"Reader X"
        },
        {  
          "value":"Redação"
        },
        {  
          "value":"Redação Publicitária"
        },
        {  
          "value":"Redação de Artigos"
        },
        {  
          "value":"Redes Sociais"
        },
        {  
          "value":"Regex"
        },
        {  
          "value":"Relacionamento"
        },
        {  
          "value":"Relações Públicas"
        },
        {  
          "value":"Renderização 3D"
        },
        {  
          "value":"Reportagem"
        },
        {  
          "value":"Resenhas"
        },
        {  
          "value":"Reviews"
        },
        {  
          "value":"Revista"
        },
        {  
          "value":"Revisão"
        },
        {  
          "value":"Revisão De Inglês"
        },
        {  
          "value":"Revisão De Texto"
        },
        {  
          "value":"Revit Architecture"
        },
        {  
          "value":"Rhinoceros"
        },
        {  
          "value":"RoboHelp"
        },
        {  
          "value":"RoboHelp Server"
        },
        {  
          "value":"Roteiro"
        },
        {  
          "value":"Roteiro de Cinema e Vídeo"
        },
        {  
          "value":"Rotoscopia"
        },
        {  
          "value":"Ruby"
        },
        {  
          "value":"Ruby on Rails"
        },
        {  
          "value":"SAP"
        },
        {  
          "value":"SAS"
        },
        {  
          "value":"SEM"
        },
        {  
          "value":"SEO"
        },
        {  
          "value":"SQL"
        },
        {  
          "value":"SQL Server"
        },
        {  
          "value":"SSH"
        },
        {  
          "value":"SVN"
        },
        {  
          "value":"Salesforce"
        },
        {  
          "value":"Samsung"
        },
        {  
          "value":"Samsung Galaxy"
        },
        {  
          "value":"Sass"
        },
        {  
          "value":"SauceLabs"
        },
        {  
          "value":"Saída De Filmes"
        },
        {  
          "value":"Saúde"
        },
        {  
          "value":"Scene7"
        },
        {  
          "value":"Scribus"
        },
        {  
          "value":"Scrum"
        },
        {  
          "value":"Scup"
        },
        {  
          "value":"Seekr"
        },
        {  
          "value":"Segurança Web"
        },
        {  
          "value":"Segurança de Redes"
        },
        {  
          "value":"Seguros"
        },
        {  
          "value":"Selenium"
        },
        {  
          "value":"Semântica"
        },
        {  
          "value":"Sencha"
        },
        {  
          "value":"SendNow"
        },
        {  
          "value":"Servidores de Anúncios"
        },
        {  
          "value":"Sharepoint"
        },
        {  
          "value":"Shell Script"
        },
        {  
          "value":"Shockwave Player"
        },
        {  
          "value":"Shopify Templates"
        },
        {  
          "value":"Silverlight"
        },
        {  
          "value":"Sistemas 3D"
        },
        {  
          "value":"SiteCatalyst"
        },
        {  
          "value":"Sitefinity"
        },
        {  
          "value":"Sketchup"
        },
        {  
          "value":"Smartphone"
        },
        {  
          "value":"Smartphone Dev"
        },
        {  
          "value":"Social Media"
        },
        {  
          "value":"Sociologia"
        },
        {  
          "value":"Softimage Xsi"
        },
        {  
          "value":"Solaris"
        },
        {  
          "value":"Solidworks"
        },
        {  
          "value":"Sonar"
        },
        {  
          "value":"Sony Sound Forge"
        },
        {  
          "value":"Sony Vegas"
        },
        {  
          "value":"Sound Design"
        },
        {  
          "value":"Soundbooth"
        },
        {  
          "value":"Soundforge"
        },
        {  
          "value":"Spring"
        },
        {  
          "value":"SQLite"
        },
        {  
          "value":"Story"
        },
        {  
          "value":"StoryTelling"
        },
        {  
          "value":"Storyboard"
        },
        {  
          "value":"Test&Target"
        },
        {  
          "value":"Teste de Automação"
        },
        {  
          "value":"Teste de Software"
        },
        {  
          "value":"Testes"
        },
        {  
          "value":"Testes A/B"
        },
        {  
          "value":"Testes de Usabilidade"
        },
        {  
          "value":"Texto Institucional"
        },
        {  
          "value":"Texto jornalístico"
        },
        {  
          "value":"Tinta Acrílica"
        },
        {  
          "value":"Tinta a óleo"
        },
        {  
          "value":"Tipografia"
        },
        {  
          "value":"Toon Boom"
        },
        {  
          "value":"Toon Boom Harmony"
        },
        {  
          "value":"Trados"
        },
        {  
          "value":"Tradução"
        },
        {  
          "value":"Traktor"
        },
        {  
          "value":"Transcrição"
        },
        {  
          "value":"Transmídia"
        },
        {  
          "value":"Tratamento de Fotos"
        },
        {  
          "value":"Trilhas"
        },
        {  
          "value":"Trilhas Musicais"
        },
        {  
          "value":"Tumblr"
        },
        {  
          "value":"Twitter"
        },
        {  
          "value":"Twitter API"
        },
        {  
          "value":"Type products"
        },
        {  
          "value":"UDK"
        },
        {  
          "value":"UML Design"
        },
        {  
          "value":"UNIX"
        },
        {  
          "value":"UX"
        },
        {  
          "value":"UX Design"
        },
        {  
          "value":"Umbraco"
        },
        {  
          "value":"Unity 3D"
        },
        {  
          "value":"Usabilidade"
        },
        {  
          "value":"VMware"
        },
        {  
          "value":"Vectorword"
        },
        {  
          "value":"Velocidade"
        },
        {  
          "value":"Verilog / VHDL"
        },
        {  
          "value":"Versátil"
        },
        {  
          "value":"Vetor"
        },
        {  
          "value":"Vetorização"
        },
        {  
          "value":"Video Streaming"
        },
        {  
          "value":"Videorreportagem"
        },
        {  
          "value":"Virtualização"
        },
        {  
          "value":"Virtuemart"
        },
        {  
          "value":"Visual Basic"
        },
        {  
          "value":"Visual Communicator"
        },
        {  
          "value":"Visual Studio"
        },
        {  
          "value":"Visualforce"
        },
        {  
          "value":"VoIP"
        },
        {  
          "value":"Vray"
        },
        {  
          "value":"Vue"
        },
        {  
          "value":"W3C"
        },
        {  
          "value":"Web Analytics"
        },
        {  
          "value":"Web Output Pak"
        },
        {  
          "value":"Webjornalismo"
        },
        {  
          "value":"Webradio"
        },
        {  
          "value":"Webservice"
        },
        {  
          "value":"Webstandards"
        },
        {  
          "value":"Webwriting"
        },
        {  
          "value":"Wiki"
        },
        {  
          "value":"Windows CE"
        },
        {  
          "value":"Windows Mobile"
        },
        {  
          "value":"Windows Server"
        },
        {  
          "value":"Windows Service"
        },
        {  
          "value":"Wireframes"
        },
        {  
          "value":"Wireless"
        },
        {  
          "value":"WooCommerce"
        },
        {  
          "value":"Word"
        },
        {  
          "value":"Wordfast"
        },
        {  
          "value":"Wordpress"
        },
        {  
          "value":"XHTML"
        },
        {  
          "value":"XML"
        },
        {  
          "value":"XP"
        },
        {  
          "value":"XSLT"
        },
        {  
          "value":"Xmind"
        },
        {  
          "value":"YahooUI"
        },
        {  
          "value":"Yii Framework"
        },
        {  
          "value":"Zen Cart"
        },
        {  
          "value":"Zen Coding"
        },
        {  
          "value":"Zend"
        },
        {  
          "value":"Zend Framework"
        },
        {  
          "value":"Zend Server"
        },
        {  
          "value":"Zope"
        },
        {  
          "value":"iClone"
        },
        {  
          "value":"iOS"
        },
        {  
          "value":"iPad"
        },
        {  
          "value":"iWorks"
        },
        {  
          "value":"jQuery"
        },
        {  
          "value":"vBulletin"
        },
        {  
          "value":"vTiger"
        },
        {  
          "value":"AGILE"
        },
        {  
          "value":"Acupuntura"
        },
        {  
          "value":"Alergia e Imunologia"
        },
        {  
          "value":"Analista de Sistemas"
        },
        {  
          "value":"Anestesiologia"
        },
        {  
          "value":"Angiologia"
        },
        {  
          "value":"Autodidata"
        },
        {  
          "value":"BTL"
        },
        {  
          "value":"Back-End"
        },
        {  
          "value":"Biodireito"
        },
        {  
          "value":"Bioengenharia"
        },
        {  
          "value":"Bioinformática"
        },
        {  
          "value":"Biologia marinha"
        },
        {  
          "value":"Biossegurança hospitalar"
        },
        {  
          "value":"Biotecnologia"
        },
        {  
          "value":"Biólogo"
        },
        {  
          "value":"Boostrap"
        },
        {  
          "value":"Branding"
        },
        {  
          "value":"Branding Digital"
        },
        {  
          "value":"BrowserLab"
        },
        {  
          "value":"Buscadores"
        },
        {  
          "value":"Business Catalyst"
        },
        {  
          "value":"Business Intelligence"
        },
        {  
          "value":"C"
        },
        {  
          "value":"C++/Bada"
        },
        {  
          "value":"CAD/CAM"
        },
        {  
          "value":"CMS"
        },
        {  
          "value":"COBOL"
        },
        {  
          "value":"CRE Loaded"
        },
        {  
          "value":"CS Live"
        },
        {  
          "value":"CS Review"
        },
        {  
          "value":"CSS"
        },
        {  
          "value":"CSS3"
        },
        {  
          "value":"CakePHP"
        },
        {  
          "value":"Cammate"
        },
        {  
          "value":"Cancerologia"
        },
        {  
          "value":"Canvas"
        },
        {  
          "value":"Capture NX2"
        },
        {  
          "value":"Capture One"
        },
        {  
          "value":"Caricatura"
        },
        {  
          "value":"Carrinho de Compras"
        },
        {  
          "value":"Cartoon"
        },
        {  
          "value":"Cartão de Visita"
        },
        {  
          "value":"Casting"
        },
        {  
          "value":"Catálogos"
        },
        {  
          "value":"Celtx"
        },
        {  
          "value":"Cenografia"
        },
        {  
          "value":"Central Pro Output Server"
        },
        {  
          "value":"Cenário Virtual"
        },
        {  
          "value":"Cerimoniais"
        },
        {  
          "value":"Cloud Computing"
        },
        {  
          "value":"Clínica Médica"
        },
        {  
          "value":"Cmaptools"
        },
        {  
          "value":"Cocoa"
        },
        {  
          "value":"Cocos2D"
        },
        {  
          "value":"Coda"
        },
        {  
          "value":"Codeigniter"
        },
        {  
          "value":"Colaborativo"
        },
        {  
          "value":"Cold Fusion"
        },
        {  
          "value":"ColdFusion 9"
        },
        {  
          "value":"Coletiva de Imprensa"
        },
        {  
          "value":"Collhunting"
        },
        {  
          "value":"Coloproctologia"
        },
        {  
          "value":"Color"
        },
        {  
          "value":"Colorista"
        },
        {  
          "value":"Combustion"
        },
        {  
          "value":"Comercial"
        },
        {  
          "value":"Comportamento do Consumidor"
        },
        {  
          "value":"Composição Musical"
        },
        {  
          "value":"Compressor"
        },
        {  
          "value":"Comunicação Corporativa"
        },
        {  
          "value":"Comunicação Digital"
        },
        {  
          "value":"Comunicação Dirigida"
        },
        {  
          "value":"Comunicação Interna"
        },
        {  
          "value":"Comunicação Interna e Externa"
        },
        {  
          "value":"Comunicação Visual"
        },
        {  
          "value":"Concept Design"
        },
        {  
          "value":"Consultoria"
        },
        {  
          "value":"Consultoria Editorial"
        },
        {  
          "value":"Contabilidade"
        },
        {  
          "value":"Content Server 4"
        },
        {  
          "value":"Conteúdo Institucional"
        },
        {  
          "value":"Contratos"
        },
        {  
          "value":"Contribute CS5"
        },
        {  
          "value":"Controle de Qualidade"
        },
        {  
          "value":"Conversão de Vídeo"
        },
        {  
          "value":"Coordenação"
        },
        {  
          "value":"Copidesque"
        },
        {  
          "value":"Corel Draw"
        },
        {  
          "value":"Corel Paint Shop"
        },
        {  
          "value":"Corel Painter"
        },
        {  
          "value":"Corel Videostudio Pro"
        },
        {  
          "value":"CorelDraw X5"
        },
        {  
          "value":"Cotidiano"
        },
        {  
          "value":"CreatePDF"
        },
        {  
          "value":"Creative Commons"
        },
        {  
          "value":"Creative Suite 5 Design Premium"
        },
        {  
          "value":"Creative Suite 5 Design Standard"
        },
        {  
          "value":"Creative Suite 5 Master Collection"
        },
        {  
          "value":"Creative Suite 5 Production Premium"
        },
        {  
          "value":"Creative Suite 5 Web Premium"
        },
        {  
          "value":"Criatividade"
        },
        {  
          "value":"Criação"
        },
        {  
          "value":"Criação de Campanhas"
        },
        {  
          "value":"Criação de Personagens"
        },
        {  
          "value":"Criptografia"
        },
        {  
          "value":"Crossbrowser"
        },
        {  
          "value":"CubeCart"
        },
        {  
          "value":"Curiosidade"
        },
        {  
          "value":"DJ"
        },
        {  
          "value":"DNS"
        },
        {  
          "value":"DTV"
        },
        {  
          "value":"DVD Studio Pro"
        },
        {  
          "value":"Data Mining"
        },
        {  
          "value":"Data Warehouse"
        },
        {  
          "value":"Day CQ5"
        },
        {  
          "value":"Day CQ5 Digital Asset Management"
        },
        {  
          "value":"Day CQ5 Social Collaboration"
        },
        {  
          "value":"Day CQ5 Web Content Management"
        },
        {  
          "value":"Day CRX"
        },
        {  
          "value":"Decoração"
        },
        {  
          "value":"Delphi"
        },
        {  
          "value":"Dermatologia"
        },
        {  
          "value":"Desenho"
        },
        {  
          "value":"Desenho Artístico"
        },
        {  
          "value":"Desenho Industrial"
        },
        {  
          "value":"Desenho Técnico"
        },
        {  
          "value":"Desenho de Moda"
        },
        {  
          "value":"Desenho e Pintura"
        },
        {  
          "value":"Desenvolvimento Desktop"
        },
        {  
          "value":"Desenvolvimento de API"
        },
        {  
          "value":"Design 2D"
        },
        {  
          "value":"Design 3D"
        },
        {  
          "value":"Design De Capas"
        },
        {  
          "value":"Design De Exposições"
        },
        {  
          "value":"Design De Superfícies"
        },
        {  
          "value":"Design Editorial"
        },
        {  
          "value":"Design Educacional"
        },
        {  
          "value":"Design Gráfico"
        },
        {  
          "value":"Design Industrial"
        },
        {  
          "value":"Design Instrucional"
        },
        {  
          "value":"Design Publicitário"
        },
        {  
          "value":"Design Têxtil"
        },
        {  
          "value":"Design de Banner"
        },
        {  
          "value":"Design de Blogs"
        },
        {  
          "value":"Design de Embalagem"
        },
        {  
          "value":"Design de Flyers"
        },
        {  
          "value":"Design de Folders"
        },
        {  
          "value":"Design de Games"
        },
        {  
          "value":"Design de Interação"
        },
        {  
          "value":"Direção De Arte"
        },
        {  
          "value":"Direção De Fotografia"
        },
        {  
          "value":"Direção de Arte para Cinema"
        },
        {  
          "value":"Direção de Arte para Fotografia"
        },
        {  
          "value":"Direção de Imagens"
        },
        {  
          "value":"Direção de TV"
        },
        {  
          "value":"Distiller Server 8"
        },
        {  
          "value":"Django"
        },
        {  
          "value":"Doctrine"
        },
        {  
          "value":"Documentação de API"
        },
        {  
          "value":"Documentário"
        },
        {  
          "value":"Domínio De Gramática"
        },
        {  
          "value":"DotNetNuke"
        },
        {  
          "value":"Dreamweaver"
        },
        {  
          "value":"Dreamweaver CS5"
        },
        {  
          "value":"Drumon Framework"
        },
        {  
          "value":"Drupal"
        },
        {  
          "value":"Dstudio"
        },
        {  
          "value":"Dublagem"
        },
        {  
          "value":"E-mail Marketing"
        },
        {  
          "value":"E.Life"
        },
        {  
          "value":"ERP"
        },
        {  
          "value":"Eclipse"
        },
        {  
          "value":"Ecologia"
        },
        {  
          "value":"Ecoturismo"
        },
        {  
          "value":"Editorial"
        },
        {  
          "value":"Edius"
        },
        {  
          "value":"Edição"
        },
        {  
          "value":"Edição de Fotografia"
        },
        {  
          "value":"Edição de Imagens"
        },
        {  
          "value":"Edição de Textos"
        },
        {  
          "value":"Edição de Vídeo"
        },
        {  
          "value":"Edição de áudio"
        },
        {  
          "value":"Edição não-linear"
        },
        {  
          "value":"Elaboração de Matérias"
        },
        {  
          "value":"Elgg"
        },
        {  
          "value":"Empreendedorismo"
        },
        {  
          "value":"Encore"
        },
        {  
          "value":"Encore CS5"
        },
        {  
          "value":"Endocrinologia"
        },
        {  
          "value":"Endomarketing"
        },
        {  
          "value":"Endoscopia"
        },
        {  
          "value":"Enfermagem"
        },
        {  
          "value":"Engenharia acústica"
        },
        {  
          "value":"Engenharia aeroespacial"
        },
        {  
          "value":"Engenharia aeronáutica"
        },
        {  
          "value":"Engenharia da Usabilidade"
        },
        {  
          "value":"Engenharia da qualidade"
        },
        {  
          "value":"Engenharia de Aquicultura"
        },
        {  
          "value":"Engenharia de Reabilitação"
        },
        {  
          "value":"Engenharia de agrimensura"
        },
        {  
          "value":"Engenharia de Alimentos"
        },
        {  
          "value":"Engenharia de automação"
        },
        {  
          "value":"Engenharia de base"
        },
        {  
          "value":"Engenharia de comissionamento"
        },
        {  
          "value":"Engenharia de computação"
        },
        {  
          "value":"Engenharia de comunicações"
        },
        {  
          "value":"Engenharia de controle e automação"
        },
        {  
          "value":"Engenharia de custos"
        },
        {  
          "value":"Engenharia de embalagens"
        },
        {  
          "value":"Engenharia de energia"
        },
        {  
          "value":"Engenharia de estradas"
        },
        {  
          "value":"Engenharia de exploração"
        },
        {  
          "value":"Engenharia de gestão"
        },
        {  
          "value":"Engenharia de hardware"
        },
        {  
          "value":"Engenharia de informação"
        },
        {  
          "value":"Engenharia de infra-estrutura"
        },
        {  
          "value":"Engenharia de instrumentação"
        },
        {  
          "value":"Engenharia de manutenção"
        },
        {  
          "value":"Engenharia de materiais"
        },
        {  
          "value":"Engenharia de minas"
        },
        {  
          "value":"Engenharia de pesca"
        },
        {  
          "value":"Engenharia de petróleo"
        },
        {  
          "value":"Engenharia de plásticos"
        },
        {  
          "value":"Engenharia de produção"
        },
        {  
          "value":"Engenharia de produção agroindustrial"
        },
        {  
          "value":"Engenharia de produção civil"
        },
        {  
          "value":"Engenharia de produção mecânica"
        },
        {  
          "value":"Engenharia de produção química"
        },
        {  
          "value":"Engenharia de recursos hídricos"
        },
        {  
          "value":"Engenharia de requisitos"
        },
        {  
          "value":"Engenharia de riscos"
        },
        {  
          "value":"Engenharia de segurança"
        },
        {  
          "value":"Engenharia de segurança do trabalho"
        },
        {  
          "value":"Engenharia de serviços"
        },
        {  
          "value":"Engenharia de sistemas"
        },
        {  
          "value":"Engenharia aeroviária"
        },
        {  
          "value":"Engenharia agronômica"
        },
        {  
          "value":"Engenharia agrícola"
        },
        {  
          "value":"Engenharia ambiental"
        },
        {  
          "value":"Engenharia automobilística"
        },
        {  
          "value":"Engenharia biofísica"
        },
        {  
          "value":"Engenharia biológica"
        },
        {  
          "value":"Engenharia biomédica"
        },
        {  
          "value":"Engenharia bioquímica"
        },
        {  
          "value":"Engenharia biônica"
        },
        {  
          "value":"Engenharia canônica"
        },
        {  
          "value":"Engenharia cartográfica"
        },
        {  
          "value":"Engenharia civil"
        },
        {  
          "value":"Engenharia civil costeira & portuária"
        },
        {  
          "value":"Engenharia de software"
        },
        {  
          "value":"Engenharia de tecidos"
        },
        {  
          "value":"Engenharia de telecomunicações"
        },
        {  
          "value":"Engenharia de teleinformática"
        },
        {  
          "value":"Engenharia de telemática"
        },
        {  
          "value":"Engenharia de transportes"
        },
        {  
          "value":"Engenharia de áudio"
        },
        {  
          "value":"Engenharia do entretenimento"
        },
        {  
          "value":"Engenharia econômica"
        },
        {  
          "value":"Engenharia eletromecânica"
        },
        {  
          "value":"Engenharia eletrônica"
        },
        {  
          "value":"Engenharia elétrica"
        },
        {  
          "value":"Engenharia em Sistemas Digitais"
        },
        {  
          "value":"Engenharia estrutural"
        },
        {  
          "value":"Engenharia ferroviária"
        },
        {  
          "value":"Engenharia florestal"
        },
        {  
          "value":"Engenharia física"
        },
        {  
          "value":"Engenharia genética"
        },
        {  
          "value":"Engenharia geofísica"
        },
        {  
          "value":"Engenharia geográfica"
        },
        {  
          "value":"Engenharia geológica"
        },
        {  
          "value":"Engenharia hidráulica"
        },
        {  
          "value":"Engenharia humana"
        },
        {  
          "value":"Engenharia industrial"
        },
        {  
          "value":"Engenharia industrial madeireira"
        },
        {  
          "value":"Engenharia informática"
        },
        {  
          "value":"Engenharia matemática"
        },
        {  
          "value":"Engenharia mecatrônica"
        },
        {  
          "value":"Engenharia mecânica"
        },
        {  
          "value":"Engenharia metalomecânica"
        },
        {  
          "value":"Engenharia metalúrgica"
        },
        {  
          "value":"Engenharia militar"
        },
        {  
          "value":"Engenharia multimédia"
        },
        {  
          "value":"Engenharia naval"
        },
        {  
          "value":"Engenharia nuclear"
        },
        {  
          "value":"Engenharia petroquímica"
        },
        {  
          "value":"Engenharia química"
        },
        {  
          "value":"Engenharia reversa"
        },
        {  
          "value":"Engenharia robótica"
        },
        {  
          "value":"Engenharia rodoviária"
        },
        {  
          "value":"Engenharia sanitária"
        },
        {  
          "value":"Engenharia têxtil"
        },
        {  
          "value":"Enity"
        },
        {  
          "value":"Entrada de Dados"
        },
        {  
          "value":"Entrevistas"
        },
        {  
          "value":"Escrita Técnica"
        },
        {  
          "value":"Escultura"
        },
        {  
          "value":"Físico"
        },
        {  
          "value":"Gastroenterologia"
        },
        {  
          "value":"Genética médica"
        },
        {  
          "value":"Geriatria"
        },
        {  
          "value":"Ginecologia e obstetrícia"
        },
        {  
          "value":"Hematologia e Hemoterapia"
        },
        {  
          "value":"Historiador"
        },
        {  
          "value":"História antiga"
        },
        {  
          "value":"História conteporânea"
        },
        {  
          "value":"História moderna"
        },
        {  
          "value":"Homeopatia"
        },
        {  
          "value":"Infectologia"
        },
        {  
          "value":"Instrutor"
        },
        {  
          "value":"Ionic"
        },
        {  
          "value":"LaravelPHP"
        },
        {  
          "value":"Mastologia"
        },
        {  
          "value":"Matemático"
        },
        {  
          "value":"Mecânico"
        },
        {  
          "value":"Medicina Esportiva"
        },
        {  
          "value":"Medicina Física e Reabilitação"
        },
        {  
          "value":"Medicina Intensiva"
        },
        {  
          "value":"Medicina Legal e Perícia Médica"
        },
        {  
          "value":"Medicina Nuclear"
        },
        {  
          "value":"Medicina Preventiva e Social"
        },
        {  
          "value":"Medicina de Família e Comunidade"
        },
        {  
          "value":"Medicina do Trabalho"
        },
        {  
          "value":"Medicina do Tráfego"
        },
        {  
          "value":"Medicina laboratorial"
        },
        {  
          "value":"Metabologia"
        },
        {  
          "value":"MeteorJS"
        },
        {  
          "value":"Microbiologia"
        },
        {  
          "value":"Nefrologia"
        },
        {  
          "value":"Netbeans"
        },
        {  
          "value":"Neurocirurgia"
        },
        {  
          "value":"Neurologia"
        },
        {  
          "value":"NodeJS"
        },
        {  
          "value":"Nutrologia"
        },
        {  
          "value":"Obstetrícia"
        },
        {  
          "value":"Oftalmologia"
        },
        {  
          "value":"Oncologia"
        },
        {  
          "value":"Ortopedia"
        },
        {  
          "value":"Otorrinolaringologia"
        },
        {  
          "value":"Paisagismo"
        },
        {  
          "value":"Patologia"
        },
        {  
          "value":"Patologia Clínica"
        },
        {  
          "value":"Patologias"
        },
        {  
          "value":"Pediatria"
        },
        {  
          "value":"Phonegapp"
        },
        {  
          "value":"Pneumologia"
        },
        {  
          "value":"ProB"
        },
        {  
          "value":"Proativo"
        },
        {  
          "value":"Protheus"
        },
        {  
          "value":"Psiquiatria"
        },
        {  
          "value":"Radiologia"
        },
        {  
          "value":"Radioterapia"
        },
        {  
          "value":"Realflow"
        },
        {  
          "value":"Realidade Aumentada"
        },
        {  
          "value":"Reumatologia"
        },
        {  
          "value":"Scrum"
        },
        {  
          "value":"TOTVS"
        },
        {  
          "value":"Teste unitário"
        },
        {  
          "value":"Traumatologia"
        },
        {  
          "value":"Urologia"
        },
        {  
          "value":"Veterinário"
        },
        {  
          "value":"Windows Phone"
        },
        {  
          "value":"eBay"
        },
        {  
          "value":"eBooks"
        },
        {  
          "value":"eCommerce"
        },
        {  
          "value":"eLearning Suite 2"
        }
      ]
    });
  }
});

Meteor.call('seedCollection', 'tags');
