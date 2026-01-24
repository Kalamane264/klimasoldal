export const products: Product[] = [
  {
    id: "syen-charm-2-7kw",
    serial: "SOH09CH-E32DA1B",
    type: "ac",
    name: "Syen Charm 2,7 kW",
    hu: {
      fullName: "Syen Charm SOH09CH-E32DA1B Inverteres Split klíma",
      typeName: "Klíma",
      desc: "Stílusos megjelenés és kiemelkedő energiahatékonyság. A Syen Charm inverteres split klíma tökéletes megoldást nyújt azoknak, akik megbízható hűtést és fűtést keresnek kedvező áron. Csendes működés, modern funkciók és professzionális telepítés egy csomagban.",
      longDesc:
        `<div class="product-description">
            <p>A <strong>Syen Charm SOH09CH-E32DA1B</strong> modell a modern technológia és az elegáns esztétika ötvözete. Az inverteres technológiának köszönhetően a készülék rendkívül energiatakarékos, így nemcsak a komfortérzetet növeli, hanem a rezsiköltségeket is optimalizálja.</p>
            
            <h3>Főbb jellemzők:</h3>
            <ul>
                <li><strong>Intelligens vezérlés:</strong> Precíz hőmérséklet-szabályozás az Ön igényeire szabva.</li>
                <li><strong>Egész éves használat:</strong> Stabil hűtési teljesítmény nyáron és hatékony fűtés a hűvösebb hónapokban.</li>
                <li><strong>Halk működés:</strong> Ideális választás hálószobákba vagy nappalikba is.</li>
                <li><strong>Garantált minőség:</strong> Professzionális telepítéssel és teljes körű szakmai támogatással kínáljuk.</li>
            </ul>
        </div>`
    },
    en: {
      fullName: "Syen Charm SOH09CH-E32DA1B Inverter Split Air Conditioner",
      typeName: "AC",
      desc: "Stylish design meets outstanding energy efficiency. The Syen Charm inverter split AC is the perfect solution for those seeking reliable cooling and heating at an affordable price. Quiet operation, modern features, and professional installation—all in one package.",
      longDesc:
        `<div class="product-description">
            <p>The <strong>Syen Charm SOH09CH-E32DA1B</strong> model is a blend of modern technology and elegant aesthetics. Thanks to its advanced inverter technology, this unit is highly energy-efficient, enhancing your comfort while optimizing utility costs.</p>
            
            <h3>Key Features:</h3>
            <ul>
                <li><strong>Intelligent Control:</strong> Precise temperature management tailored to your needs.</li>
                <li><strong>All-Season Performance:</strong> Stable cooling in the summer and efficient heating during colder months.</li>
                <li><strong>Ultra-Quiet Operation:</strong> An ideal choice for bedrooms and living rooms alike.</li>
                <li><strong>Guaranteed Quality:</strong> Offered with professional installation and full expert support.</li>
            </ul>
        </div>
        `
    },
    price: "245.000 Ft",
    specs: ["A++", "WiFi", "Légtisztítás"],
    specsExtended: [
      { label: "Energiaosztály", value: "A++" },
      { label: "Zajszint", value: "19 dB" },
      { label: "WiFi vezérlés", value: "Igen" },
      { label: "Garancia", value: "5 év" },
    ],
  },
];

export type Product = {
  id: string;
  serial: string;
  type: string;
  name: string;
  hu: MultilingualProps;
  en: MultilingualProps;
  price: string;
  specs: string[];
  specsExtended: SpecsExtended[];
};

type MultilingualProps = {
  fullName: string;
  typeName: string;
  desc: string;
  longDesc: string;
};

type SpecsExtended = {
  label: string;
  value: string;
};
