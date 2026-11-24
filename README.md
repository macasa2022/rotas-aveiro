# Rotas Entregas (Aveiro e Viseu)

Planeador de entregas para motoristas, com as zonas de **Aveiro** e **Viseu** na mesma app (escolhe a zona em «Planear → Zona de trabalho»). Calcula a melhor ordem das paragens na rede rodoviária real, com regresso ao armazém, e abre a navegação até cada paragem no **Google Maps** ou no **Waze**.

**👉 Abrir a aplicação: https://macasa2022.github.io/rotas-entregas/**

Funciona no telemóvel (Android e iPhone) e no computador. É gratuita, não precisa de conta nem de chaves de acesso.

## Instalar no telemóvel

- **Android (Chrome):** abre o endereço acima → 3 pontos → **Instale e crie um atalho → Instalar**. Se tinhas a antiga app «Rotas Aveiro» instalada, apaga-a e instala esta a partir do endereço novo (a volta guardada mantém-se).
- **iPhone (Safari):** abre o endereço acima → botão **Partilhar** → **Adicionar ao ecrã principal**.

A aplicação fica com um ícone próprio, abre em ecrã inteiro e, depois da primeira utilização, abre mesmo sem Internet (a lista de entregas e os estados continuam acessíveis).

## Como usar

1. **Armazém:** escreve a morada ou toca no mapa.
2. **Entregas:** escolhe uma das formas de as indicar:
   - **📷 Fotografia** da folha de entregas (A4, guia ou etiquetas). O texto é lido no próprio telemóvel e as moradas são organizadas automaticamente; confere-as antes de continuar.
   - **Excel (.xlsx) ou CSV**, com as colunas Morada, Nº, Código postal e Localidade.
   - **Texto colado** de um PDF, de uma mensagem ou de uma foto copiada com o Google Lens / Texto Ativo.
   - **Toques no mapa.**
   - **📄 PDF da guia de transporte** (recomendado): a aplicação lê o texto do PDF e preenche tudo sozinha — nome do cliente, morada, horário (AM/PM), entrega ou recolha, artigo e nº da guia. O leitor de PDF é descarregado na primeira utilização.
   - **Guias de transporte** (ex.: folha com Destinatário, Franja, Tipo de serviço, Artigo): a aplicação fica com a morada **do cliente**, ignora as moradas da loja e do armazém que se repetem em todas as linhas e junta numa só paragem a entrega e a recolha (sucata) do mesmo cliente. Em Excel/CSV, nas recolhas a morada vem do Expedidor.
   - Em cada morada podes confirmar ou escrever o **nome do destinatário**, o **horário** (manhã/tarde), o **tipo** (entrega/recolha) e o **artigo**. **Marcar no mapa:** o mapa aproxima-se da morada e aparece um marcador laranja que arrastas até à entrada; nada muda até carregares em **Confirmar**. «Ignorar sempre» memoriza moradas de lojas/armazéns para as próximas guias.
3. **Otimizar rota circular** — as entregas da **manhã (AM)** ficam sempre antes das da **tarde (PM)**. → **Iniciar entregas por esta ordem**.
4. Em cada paragem: **Google Maps** ou **Waze** para conduzir até lá, e depois **✓ Entregue** ou **✗ Não entregue**.
5. **Recalcular as pendentes** a partir da tua localização, de um ponto no mapa ou da última paragem tratada.
6. **Regresso ao armazém**, disponível a qualquer momento.

Funciona em **qualquer zona do país** (a pesquisa usa o armazém como referência). Se a rua não for encontrada, usa a zona do **código postal**.

Inclui o **código postal** nas moradas: há várias ruas com o mesmo nome em freguesias diferentes, e o código postal permite escolher a certa sem perguntar.

## Privacidade

- As entregas, as moradas e os estados ficam guardados **apenas no aparelho** (armazenamento do navegador). Nada é enviado para este repositório.
- As fotografias e os ficheiros Excel/CSV são lidos no próprio aparelho. O nome do destinatário, o horário e o artigo ficam **só no aparelho** para o motorista; nunca são enviados para a pesquisa de moradas. Telefones não são usados.
- Para funcionar, a aplicação usa serviços públicos gratuitos:
  - o **Photon** e o **Nominatim** recebem o texto das moradas pesquisadas;
  - o **OSRM** recebe as coordenadas para calcular as rotas;
  - o **Google Maps** e o **Waze** recebem o destino que abres;
  - o **jsDelivr** fornece os ficheiros do leitor de fotografias e do leitor de PDF (a fotografia e o PDF nunca saem do aparelho).
- A localização é lida uma única vez, só quando pedes o recálculo, e só depois da autorização do navegador.

## Limitações

- Os números de porta só são encontrados quando existem no OpenStreetMap. Muitas moradas são localizadas pela rua («≈ rua»).
- As estimativas não incluem trânsito em tempo real, obras nem o tempo de cada entrega.
- A leitura de fotografias pode trocar números com letra manuscrita, fotos tortas ou com pouca luz.
- Os serviços gratuitos não têm garantia de disponibilidade e destinam-se a uso moderado.
- Não há sincronização entre aparelhos.

## Créditos

- Mapas e dados de moradas: © [contribuidores do OpenStreetMap](https://www.openstreetmap.org/copyright) (ODbL)
- Rotas: [OSRM](https://project-osrm.org/), através do serviço público da [FOSSGIS](https://routing.openstreetmap.de/about.html)
- Pesquisa de moradas: [Photon](https://github.com/komoot/photon) (komoot) e [Nominatim](https://nominatim.org/)
- Mapa interativo: [Leaflet](https://leafletjs.com/) (licença BSD-2)
- Leitura de fotografias: [Tesseract.js](https://github.com/naptha/tesseract.js) (licença Apache 2.0)

Desenvolvido por Mário Sanca (Nadinca).
