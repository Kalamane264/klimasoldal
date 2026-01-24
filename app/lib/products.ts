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
      specs: [
        "A++",
        "Wi-Fi",
        "cold plasma ionizáló",
        "3D légáram",
        "I-Feel",
        "8°C-os temperálás",
        "-15°C-os fűtési működési tartomány",
        "7 fokozatú ventilátor",
      ],
      specsExtended: [
        { label: "Hűtési teljesítmény", value: "2,7 kW" },
        { label: "Ajánlott helyiségméret", value: "20–30 m²" },
        { label: "Hűtési energiaosztály", value: "A++" },
        { label: "Fűtési energiaosztály", value: "A+" },
        { label: "WiFi vezérlés", value: "Igen" },
        { label: "Zajszint (beltéri)", value: "21–40 dB(A)" },
        { label: "Fűtési teljesítmény", value: "2,8 kW" },
        { label: "H-tarifa kompatibilis", value: "Igen" },
        { label: "Garancia", value: "3 év" },
      ],
      longDesc: `<div class="product-description">
            <p>A <strong>Syen Charm SOH09CH-E32DA1B</strong> modell a modern technológia és az elegáns esztétika ötvözete. Az inverteres technológiának köszönhetően a készülék rendkívül energiatakarékos, így nemcsak a komfortérzetet növeli, hanem a rezsiköltségeket is optimalizálja.</p>
            
            <h3>Főbb jellemzők:</h3>
            <ul>
                <li><strong>Intelligens vezérlés:</strong> Precíz hőmérséklet-szabályozás az Ön igényeire szabva.</li>
                <li><strong>Egész éves használat:</strong> Stabil hűtési teljesítmény nyáron és hatékony fűtés a hűvösebb hónapokban.</li>
                <li><strong>Halk működés:</strong> Ideális választás hálószobákba vagy nappalikba is.</li>
                <li><strong>Garantált minőség:</strong> Professzionális telepítéssel és teljes körű szakmai támogatással kínáljuk.</li>
            </ul>
        </div>`,
    },
    en: {
      fullName: "Syen Charm SOH09CH-E32DA1B Inverter Split Air Conditioner",
      typeName: "AC",
      desc: "Stylish design meets outstanding energy efficiency. The Syen Charm inverter split AC is the perfect solution for those seeking reliable cooling and heating at an affordable price. Quiet operation, modern features, and professional installation—all in one package.",
      specs: [
        "A++",
        "Wi-Fi",
        "Cold Plasma Ionizer",
        "3D Airflow",
        "I-Feel Function",
        "8°C Heating Mode",
        "-15°C Heating Operating Range",
        "7-Speed Fan",
      ],
      specsExtended: [
        { label: "Cooling capacity", value: "2.7 kW" },
        { label: "Recommended room size", value: "20–30 m²" },
        { label: "Energy class (Cooling)", value: "A++" },
        { label: "Energy class (Heating)", value: "A+" },
        { label: "WiFi control", value: "Yes" },
        { label: "Noise level (Indoor unit)", value: "21–40 dB(A)" },
        { label: "Heating capacity", value: "2.8 kW" },
        { label: "H-tariff compatible", value: "Yes" },
        { label: "Warranty", value: "3 years" },
      ],
      longDesc: `<div class="product-description">
            <p>The <strong>Syen Charm SOH09CH-E32DA1B</strong> model is a blend of modern technology and elegant aesthetics. Thanks to its advanced inverter technology, this unit is highly energy-efficient, enhancing your comfort while optimizing utility costs.</p>
            
            <h3>Key Features:</h3>
            <ul>
                <li><strong>Intelligent Control:</strong> Precise temperature management tailored to your needs.</li>
                <li><strong>All-Season Performance:</strong> Stable cooling in the summer and efficient heating during colder months.</li>
                <li><strong>Ultra-Quiet Operation:</strong> An ideal choice for bedrooms and living rooms alike.</li>
                <li><strong>Guaranteed Quality:</strong> Offered with professional installation and full expert support.</li>
            </ul>
        </div> `,
    },
    price: "290.000 Ft",
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
};

type MultilingualProps = {
  fullName: string;
  typeName: string;
  desc: string;
  longDesc: string;
  specs: string[];
  specsExtended: SpecsExtended[];
};

type SpecsExtended = {
  label: string;
  value: string;
};
