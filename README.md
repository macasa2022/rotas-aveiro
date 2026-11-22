# Rotas Aveiro

Planeador de entregas para motoristas em **Aveiro**. Calcula a melhor ordem das paragens na rede rodoviária real, com regresso ao armazém, e abre a navegação até cada paragem no **Google Maps** ou no **Waze**.

**👉 Abrir a aplicação: https://macasa2022.github.io/rotas-aveiro/**

Funciona no telemóvel (Android e iPhone) e no computador. É gratuita, não precisa de conta nem de chaves de acesso.

## Instalar no telemóvel

- **Android (Chrome):** abre o endereço acima → 3 pontos → **Instale e crie um atalho → Instalar**.
- **iPhone (Safari):** abre o endereço acima → botão **Partilhar** → **Adicionar ao ecrã principal**.

A aplicação fica com um ícone próprio, abre em ecrã inteiro e, depois da primeira utilização, abre mesmo sem Internet (a lista de entregas e os estados continuam acessíveis).

## Como usar

1. **Armazém:** escreve a morada ou toca no mapa.
2. **Entregas:** escolhe uma das formas de as indicar:
   - **📷 Fotografia** da folha de entregas (A4, guia ou etiquetas). O texto é lido no próprio telemóvel e as moradas são organizadas automaticamente; confere-as antes de continuar.
   - **Excel (.xlsx) ou CSV**, com as colunas Morada, Nº, Código postal e Localidade.
   - **Texto colado** de um PDF, de uma mensagem ou de uma foto copiada com o Google Lens / Texto Ativo.
   - **Toques no mapa.**
3. **Otimizar rota circular** → **Iniciar entregas por esta ordem**.
4. Em cada paragem: **Google Maps** ou **Waze** para conduzir até lá, e depois **✓ Entregue** ou **✗ Não entregue**.
5. **Recalcular as pendentes** a partir da tua localização, de um ponto no mapa ou da última paragem tratada.
6. **Regresso ao armazém**, disponível a qualquer momento.

Inclui o **código postal** nas moradas: há várias ruas com o mesmo nome em freguesias diferentes, e o código postal permite escolher a certa sem perguntar.

## Privacidade

- As entregas, as moradas e os estados ficam guardados **apenas no aparelho** (armazenamento do navegador). Nada é enviado para este repositório.
- As fotografias e os ficheiros Excel/CSV são lidos no próprio aparelho. Nomes e telefones não são usados.
- Para funcionar, a aplicação usa serviços públicos gratuitos:
  - o **Photon** e o **Nominatim** recebem o texto das moradas pesquisadas;
  - o **OSRM** recebe as coordenadas para calcular as rotas;
  - o **Google Maps** e o **Waze** recebem o destino que abres;
  - o **jsDelivr** fornece os ficheiros do leitor de fotografias.
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
