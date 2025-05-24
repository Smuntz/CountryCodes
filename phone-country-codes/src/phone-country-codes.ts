import { LitElement, html, css } from 'lit';
import { customElement, state, query } from 'lit/decorators.js';

@customElement('country-phone-codes')
export class CountryPhoneCodes extends LitElement {
static styles = css`
    :host {
      display: block;
      font-family: var(--ntx-form-theme-font-family, sans-serif);
    }

    .container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 300px;
    }

    .form-control {
      color: var(--ntx-form-theme-color-secondary);
      background-color: var(--ntx-form-theme-color-input-background, transparent);
      font-size: var(--ntx-form-theme-text-input-size);
      font-family: var(--ntx-form-theme-font-family);
      border: 1px solid var(--ntx-form-theme-color-border);
      border-radius: var(--ntx-form-theme-border-radius);
      padding: 0.5rem;
    }

    .form-control:focus {
      outline: none;
      border-color: var(--ntx-form-theme-color-primary);
    }

    .phone-input {
      display: flex;
      gap: 0.5rem;
    }

    .phone-input input[readonly] {
      width: 80px;
    }
  `;

  static getMetaConfig() {
    return {
      controlName: 'International Phone Numbers',
      description: 'COuntry code by country',
      iconUrl: 'one-line-text',
      groupName: 'Phone Numbers',
      fallbackDisableSubmit: false,
      version: '2.2.0',
      searchTerms: ["phone"],
      properties: {
        fullPhoneNumber: {
          type: 'string',
          title: 'Output',
          isValueField: true,
        }
      },
      standardProperties: {
        readOnly: true,
        required: true,
        description: true,
        visibility: true,
        fieldLabel: true,
      },
      designer: {
        staticProperties: ["padDirection"],
      },
    };
  }

  @state() selectedCountry = 'United States';
  @state() fullPhoneNumber = '';

  @query('#phone-input') phoneNumberInput!: HTMLInputElement;

  private countries: Record<string, string> = {
    "Afghanistan": "93",
    "Albania": "355",
    "Algeria": "213",
    "American Samoa": "1-684",
    "Andorra": "376",
    "Angola": "244",
    "Anguilla": "1-264",
    "Antarctica": "672",
    "Antigua and Barbuda": "1-268",
    "Argentina": "54",
    "Armenia": "374",
    "Aruba": "297",
    "Australia": "61",
    "Austria": "43",
    "Azerbaijan": "994",
    "Bahamas": "1-242",
    "Bahrain": "973",
    "Bangladesh": "880",
    "Barbados": "1-246",
    "Belarus": "375",
    "Belgium": "32",
    "Belize": "501",
    "Benin": "229",
    "Bermuda": "1-441",
    "Bhutan": "975",
    "Bolivia": "591",
    "Bosnia and Herzegovina": "387",
    "Botswana": "267",
    "Brazil": "55",
    "British Indian Ocean Territory": "246",
    "British Virgin Islands": "1-284",
    "Brunei": "673",
    "Bulgaria": "359",
    "Burkina Faso": "226",
    "Burundi": "257",
    "Cambodia": "855",
    "Cameroon": "237",
    "Canada": "1",
    "Cape Verde": "238",
    "Cayman Islands": "1-345",
    "Central African Republic": "236",
    "Chad": "235",
    "Chile": "56",
    "China": "86",
    "Christmas Island": "61",
    "Cocos Islands": "61",
    "Colombia": "57",
    "Comoros": "269",
    "Cook Islands": "682",
    "Costa Rica": "506",
    "Croatia": "385",
    "Cuba": "53",
    "Curacao": "599",
    "Cyprus": "357",
    "Czech Republic": "420",
    "Democratic Republic of the Congo": "243",
    "Denmark": "45",
    "Djibouti": "253",
    "Dominica": "1-767",
    "Dominican Republic": "1-809",
    "Dominican Republic 2": "1-829",
    "Dominican Republic 3": "1-849",
    "East Timor": "670",
    "Ecuador": "593",
    "Egypt": "20",
    "El Salvador": "503",
    "Equatorial Guinea": "240",
    "Eritrea": "291",
    "Estonia": "372",
    "Eswatini": "268",
    "Ethiopia": "251",
    "Falkland Islands": "500",
    "Faroe Islands": "298",
    "Fiji": "679",
    "Finland": "358",
    "France": "33",
    "French Polynesia": "689",
    "Gabon": "241",
    "Gambia": "220",
    "Georgia": "995",
    "Germany": "49",
    "Ghana": "233",
    "Gibraltar": "350",
    "Greece": "30",
    "Greenland": "299",
    "Grenada": "1-473",
    "Guam": "1-671",
    "Guatemala": "502",
    "Guernsey": "44-1481",
    "Guinea": "224",
    "Guinea-Bissau": "245",
    "Guyana": "592",
    "Haiti": "509",
    "Honduras": "504",
    "Hong Kong": "852",
    "Hungary": "36",
    "Iceland": "354",
    "India": "91",
    "Indonesia": "62",
    "Iran": "98",
    "Iraq": "964",
    "Ireland": "353",
    "Isle of Man": "44-1624",
    "Israel": "972",
    "Italy": "39",
    "Ivory Coast": "225",
    "Jamaica": "1-876",
    "Japan": "81",
    "Jersey": "44-1534",
    "Jordan": "962",
    "Kazakhstan": "7",
    "Kenya": "254",
    "Kiribati": "686",
    "Kosovo": "383",
    "Kuwait": "965",
    "Kyrgyzstan": "996",
    "Laos": "856",
    "Latvia": "371",
    "Lebanon": "961",
    "Lesotho": "266",
    "Liberia": "231",
    "Libya": "218",
    "Liechtenstein": "423",
    "Lithuania": "370",
    "Luxembourg": "352",
    "Macao": "853",
    "Macedonia": "389",
    "Madagascar": "261",
    "Malawi": "265",
    "Malaysia": "60",
    "Maldives": "960",
    "Mali": "223",
    "Malta": "356",
    "Marshall Islands": "692",
    "Mauritania": "222",
    "Mauritius": "230",
    "Mayotte": "262",
    "Mexico": "52",
    "Micronesia": "691",
    "Moldova": "373",
    "Monaco": "377",
    "Mongolia": "976",
    "Montenegro": "382",
    "Montserrat": "1-664",
    "Morocco": "212",
    "Mozambique": "258",
    "Myanmar": "95",
    "Namibia": "264",
    "Nauru": "674",
    "Nepal": "977",
    "Netherlands": "31",
    "Netherlands Antilles": "599",
    "New Caledonia": "687",
    "New Zealand": "64",
    "Nicaragua": "505",
    "Niger": "227",
    "Nigeria": "234",
    "Niue": "683",
    "North Korea": "850",
    "Northern Mariana Islands": "1-670",
    "Norway": "47",
    "Oman": "968",
    "Pakistan": "92",
    "Palau": "680",
    "Palestine": "970",
    "Panama": "507",
    "Papua New Guinea": "675",
    "Paraguay": "595",
    "Peru": "51",
    "Philippines": "63",
    "Pitcairn": "64",
    "Poland": "48",
    "Portugal": "351",
    "Puerto Rico": "1-787",
    "Puerto Rico 2": "1-939",
    "Qatar": "974",
    "Republic of the Congo": "242",
    "Reunion": "262",
    "Romania": "40",
    "Russia": "7",
    "Rwanda": "250",
    "Saint Barthelemy": "590",
    "Saint Helena": "290",
    "Saint Kitts and Nevis": "1-869",
    "Saint Lucia": "1-758",
    "Saint Martin": "590",
    "Saint Pierre and Miquelon": "508",
    "Saint Vincent and the Grenadines": "1-784",
    "Samoa": "685",
    "San Marino": "378",
    "Sao Tome and Principe": "239",
    "Saudi Arabia": "966",
    "Senegal": "221",
    "Serbia": "381",
    "Seychelles": "248",
    "Sierra Leone": "232",
    "Singapore": "65",
    "Sint Maarten": "1-721",
    "Slovakia": "421",
    "Slovenia": "386",
    "Solomon Islands": "677",
    "Somalia": "252",
    "South Africa": "27",
    "South Korea": "82",
    "South Sudan": "211",
    "Spain": "34",
    "Sri Lanka": "94",
    "Sudan": "249",
    "Suriname": "597",
    "Svalbard and Jan Mayen": "47",
    "Sweden": "46",
    "Switzerland": "41",
    "Syria": "963",
    "Taiwan": "886",
    "Tajikistan": "992",
    "Tanzania": "255",
    "Thailand": "66",
    "Togo": "228",
    "Tokelau": "690",
    "Tonga": "676",
    "Trinidad and Tobago": "1-868",
    "Tunisia": "216",
    "Turkey": "90",
    "Turkmenistan": "993",
    "Turks and Caicos Islands": "1-649",
    "Tuvalu": "688",
    "U.S. Virgin Islands": "1-340",
    "Uganda": "256",
    "Ukraine": "380",
    "United Arab Emirates": "971",
    "United Kingdom": "44",
    "United States": "1",
    "Uruguay": "598",
    "Uzbekistan": "998",
    "Vanuatu": "678",
    "Vatican": "379",
    "Venezuela": "58",
    "Vietnam": "84",
    "Wallis and Futuna": "681",
    "Western Sahara": "212",
    "Yemen": "967",
    "Zambia": "260",
    "Zimbabwe": "263"
  };

  private get countryCode(): string {
    return this.countries[this.selectedCountry] || '';
  }

render() {
    return html`
      <div class="container">
        <label for="country-select">Country</label>
        <select
          id="country-select"
          class="form-control"
          @change=${this.onCountryChange}
        >
          ${Object.keys(this.countries).map(
            country => html`<option ?selected=${country === this.selectedCountry}>${country}</option>`
          )}
        </select>

        <label for="phone-input">Phone Number</label>
        <div class="phone-input">
          <input
            type="text"
            readonly
            class="form-control"
            .value=${'+' + this.countryCode}
          />
          <input
            type="tel"
            id="phone-input"
            class="form-control"
            placeholder="Enter number..."
            @blur=${this.onPhoneBlur}
          />
        </div>
      </div>
    `;
  }

  private onCountryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedCountry = select.value;
  }

  private onPhoneBlur() {
    const phone = this.phoneNumberInput.value.trim();
    const code = '+' + this.countryCode;
    this.fullPhoneNumber = `${code}${phone ? ' ' + phone : ''}`;
    this.requestUpdate();

    this.dispatchEvent(new CustomEvent<string>('ntx-value-change', {
      bubbles: true,
      cancelable: false,
      composed: true,
      detail: this.fullPhoneNumber,
    }));
  }
}
