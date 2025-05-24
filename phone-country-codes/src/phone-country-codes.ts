import { LitElement, html, css } from 'lit';
import { property, customElement, state } from 'lit/decorators.js';

const logo = new URL('../../assets/open-wc-logo.svg', import.meta.url).href;

@customElement('phone-country-codes')
export class CountryPhoneCodes extends LitElement {
  static styles = css`
    :host {
      display: block;
      font-family: sans-serif;
    }
    .container {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      max-width: 300px;
    }
    select, input {
      padding: 0.5rem;
      font-size: 1rem;
    }
    .phone-input {
      display: flex;
      gap: 0.5rem;
    }
    .phone-input input[readonly] {
      width: 80px;
    }
  `;

  @state() selectedCountry = 'United States';

  private countries: Record<string, string> = {
    "Afghanistan": "93",
    "Albania": "355",
    "Algeria": "213",
    // (Shortened for brevity — add the full list from above)
    "United Kingdom": "44",
    "United States": "1",
    "Zimbabwe": "263"
  };

  private get countryCode(): string {
    return this.countries[this.selectedCountry] || '';
  }

  render() {
    return html`
      <div class="container">
        <label for="country-select">Country</label>
        <select id="country-select" @change=${this.onCountryChange}>
          ${Object.keys(this.countries).map(
            country => html`<option ?selected=${country === this.selectedCountry}>${country}</option>`
          )}
        </select>

        <label for="phone-input">Phone Number</label>
        <div class="phone-input">
          <input type="text" readonly .value=${'+' + this.countryCode} />
          <input type="tel" placeholder="Enter number..." />
        </div>
      </div>
    `;
  }

  private onCountryChange(event: Event) {
    const select = event.target as HTMLSelectElement;
    this.selectedCountry = select.value;
  }
}
