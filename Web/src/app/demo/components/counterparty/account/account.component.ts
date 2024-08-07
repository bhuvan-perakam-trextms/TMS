<<<<<<< HEAD
import { Component, OnInit, OnDestroy } from '@angular/core';
import {ConfirmationService,MessageService} from 'primeng/api';
=======
import { Component,OnInit } from '@angular/core';
import { FilterableSettings } from '@progress/kendo-angular-grid';

interface Country {
  name: string;
  code: string;
}

interface Currency {
  name: string;
  code: string;
}
>>>>>>> main


@Component({
  templateUrl: './account.component.html',
  providers: [ConfirmationService, MessageService]
})
<<<<<<< HEAD
export class AccountComponent  implements OnInit, OnDestroy
{

  counterpartyAccount: any[] = [];
  selectedcounterpartyAccount: any;

  country: any[] = [];
  selectedcountry: any;

  currency: any[] = [];
  selectedcurrency: any;

  bank: string = '';
  accountNumber: string = '';
  swiftBic: string = '';
  sortCode: string = '';
  isActive: boolean = false;
  

  ngOnInit(): void 
  {
    this.counterpartyAccount =
      [
        { name: 'counterparty Account1', code: 'CPA1' },
        { name: 'counterparty Account2', code: 'CPA2' },
      ];

    this.country =
      [
        { name: 'Afghanistan', code: 'AF' },
        { name: 'Albania', code: 'AL' },
        { name: 'Algeria', code: 'DZ' },
        { name: 'Andorra', code: 'AD' },
        { name: 'Angola', code: 'AO' },
        { name: 'Antigua and Barbuda', code: 'AG' },
        { name: 'Argentina', code: 'AR' },
        { name: 'Armenia', code: 'AM' },
        { name: 'Australia', code: 'AU' },
        { name: 'Austria', code: 'AT' },
        { name: 'Azerbaijan', code: 'AZ' },
        { name: 'Bahamas', code: 'BS' },
        { name: 'Bahrain', code: 'BH' },
        { name: 'Bangladesh', code: 'BD' },
        { name: 'Barbados', code: 'BB' },
        { name: 'Belarus', code: 'BY' },
        { name: 'Belgium', code: 'BE' },
        { name: 'Belize', code: 'BZ' },
        { name: 'Benin', code: 'BJ' },
        { name: 'Bhutan', code: 'BT' },
        { name: 'Bolivia', code: 'BO' },
        { name: 'Bosnia and Herzegovina', code: 'BA' },
        { name: 'Botswana', code: 'BW' },
        { name: 'Brazil', code: 'BR' },
        { name: 'Brunei Darussalam', code: 'BN' },
        { name: 'Bulgaria', code: 'BG' },
        { name: 'Burkina Faso', code: 'BF' },
        { name: 'Burundi', code: 'BI' },
        { name: 'Cabo Verde', code: 'CV' },
        { name: 'Cambodia', code: 'KH' },
        { name: 'Cameroon', code: 'CM' },
        { name: 'Canada', code: 'CA' },
        { name: 'Central African Republic', code: 'CF' },
        { name: 'Chad', code: 'TD' },
        { name: 'Chile', code: 'CL' },
        { name: 'China', code: 'CN' },
        { name: 'Colombia', code: 'CO' },
        { name: 'Comoros', code: 'KM' },
        { name: 'Congo', code: 'CG' },
        { name: 'Costa Rica', code: 'CR' },
        { name: 'Croatia', code: 'HR' },
        { name: 'Cuba', code: 'CU' },
        { name: 'Cyprus', code: 'CY' },
        { name: 'Czech Republic', code: 'CZ' },
        { name: 'Denmark', code: 'DK' },
        { name: 'Djibouti', code: 'DJ' },
        { name: 'Dominica', code: 'DM' },
        { name: 'Dominican Republic', code: 'DO' },
        { name: 'Ecuador', code: 'EC' },
        { name: 'Egypt', code: 'EG' },
        { name: 'El Salvador', code: 'SV' },
        { name: 'Equatorial Guinea', code: 'GQ' },
        { name: 'Eritrea', code: 'ER' },
        { name: 'Estonia', code: 'EE' },
        { name: 'Eswatini', code: 'SZ' },
        { name: 'Ethiopia', code: 'ET' },
        { name: 'Fiji', code: 'FJ' },
        { name: 'Finland', code: 'FI' },
        { name: 'France', code: 'FR' },
        { name: 'Gabon', code: 'GA' },
        { name: 'Gambia', code: 'GM' },
        { name: 'Georgia', code: 'GE' },
        { name: 'Germany', code: 'DE' },
        { name: 'Ghana', code: 'GH' },
        { name: 'Greece', code: 'GR' },
        { name: 'Grenada', code: 'GD' },
        { name: 'Guatemala', code: 'GT' },
        { name: 'Guinea', code: 'GN' },
        { name: 'Guinea-Bissau', code: 'GW' },
        { name: 'Guyana', code: 'GY' },
        { name: 'Haiti', code: 'HT' },
        { name: 'Honduras', code: 'HN' },
        { name: 'Hungary', code: 'HU' },
        { name: 'Iceland', code: 'IS' },
        { name: 'India', code: 'IN' },
        { name: 'Indonesia', code: 'ID' },
        { name: 'Iran', code: 'IR' },
        { name: 'Iraq', code: 'IQ' },
        { name: 'Ireland', code: 'IE' },
        { name: 'Israel', code: 'IL' },
        { name: 'Italy', code: 'IT' },
        { name: 'Jamaica', code: 'JM' },
        { name: 'Japan', code: 'JP' },
        { name: 'Jordan', code: 'JO' },
        { name: 'Kazakhstan', code: 'KZ' },
        { name: 'Kenya', code: 'KE' },
        { name: 'Kiribati', code: 'KI' },
        { name: 'Korea', code: 'KR' },
        { name: 'Kuwait', code: 'KW' },
        { name: 'Kyrgyzstan', code: 'KG' },
        { name: 'Laos', code: 'LA' },
        { name: 'Latvia', code: 'LV' },
        { name: 'Lebanon', code: 'LB' },
        { name: 'Lesotho', code: 'LS' },
        { name: 'Liberia', code: 'LR' },
        { name: 'Libya', code: 'LY' },
        { name: 'Liechtenstein', code: 'LI' },
        { name: 'Lithuania', code: 'LT' },
        { name: 'Luxembourg', code: 'LU' },
        { name: 'Madagascar', code: 'MG' },
        { name: 'Malawi', code: 'MW' },
        { name: 'Malaysia', code: 'MY' },
        { name: 'Maldives', code: 'MV' },
        { name: 'Mali', code: 'ML' },
        { name: 'Malta', code: 'MT' },
        { name: 'Marshall Islands', code: 'MH' },
        { name: 'Mauritania', code: 'MR' },
        { name: 'Mauritius', code: 'MU' },
        { name: 'Mexico', code: 'MX' },
        { name: 'Micronesia', code: 'FM' },
        { name: 'Moldova', code: 'MD' },
        { name: 'Monaco', code: 'MC' },
        { name: 'Mongolia', code: 'MN' },
        { name: 'Montenegro', code: 'ME' },
        { name: 'Morocco', code: 'MA' },
        { name: 'Mozambique', code: 'MZ' },
        { name: 'Myanmar', code: 'MM' },
        { name: 'Namibia', code: 'NA' },
        { name: 'Nauru', code: 'NR' },
        { name: 'Nepal', code: 'NP' },
        { name: 'Netherlands', code: 'NL' },
        { name: 'New Zealand', code: 'NZ' },
        { name: 'Nicaragua', code: 'NI' },
        { name: 'Niger', code: 'NE' },
        { name: 'Nigeria', code: 'NG' },
        { name: 'North Macedonia', code: 'MK' },
        { name: 'Norway', code: 'NO' },
        { name: 'Oman', code: 'OM' },
        { name: 'Pakistan', code: 'PK' },
        { name: 'Palau', code: 'PW' },
        { name: 'Panama', code: 'PA' },
        { name: 'Papua New Guinea', code: 'PG' },
        { name: 'Paraguay', code: 'PY' },
        { name: 'Peru', code: 'PE' },
        { name: 'Philippines', code: 'PH' },
        { name: 'Poland', code: 'PL' },
        { name: 'Portugal', code: 'PT' },
        { name: 'Qatar', code: 'QA' },
        { name: 'Romania', code: 'RO' },
        { name: 'Russia', code: 'RU' },
        { name: 'Rwanda', code: 'RW' },
        { name: 'Saint Kitts and Nevis', code: 'KN' },
        { name: 'Saint Lucia', code: 'LC' },
        { name: 'Saint Vincent and the Grenadines', code: 'VC' },
        { name: 'Samoa', code: 'WS' },
        { name: 'San Marino', code: 'SM' },
        { name: 'Sao Tome and Principe', code: 'ST' },
        { name: 'Saudi Arabia', code: 'SA' },
        { name: 'Senegal', code: 'SN' },
        { name: 'Serbia', code: 'RS' },
        { name: 'Seychelles', code: 'SC' },
        { name: 'Sierra Leone', code: 'SL' },
        { name: 'Singapore', code: 'SG' },
        { name: 'Slovakia', code: 'SK' },
        { name: 'Slovenia', code: 'SI' },
        { name: 'Solomon Islands', code: 'SB' },
        { name: 'Somalia', code: 'SO' },
        { name: 'South Africa', code: 'ZA' },
        { name: 'South Sudan', code: 'SS' },
        { name: 'Spain', code: 'ES' },
        { name: 'Sri Lanka', code: 'LK' },
        { name: 'Sudan', code: 'SD' },
        { name: 'Suriname', code: 'SR' },
        { name: 'Sweden', code: 'SE' },
        { name: 'Switzerland', code: 'CH' },
        { name: 'Syria', code: 'SY' },
        { name: 'Taiwan', code: 'TW' },
        { name: 'Tajikistan', code: 'TJ' },
        { name: 'Tanzania', code: 'TZ' },
        { name: 'Thailand', code: 'TH' },
        { name: 'Timor-Leste', code: 'TL' },
        { name: 'Togo', code: 'TG' },
        { name: 'Tonga', code: 'TO' },
        { name: 'Trinidad and Tobago', code: 'TT' },
        { name: 'Tunisia', code: 'TN' },
        { name: 'Turkey', code: 'TR' },
        { name: 'Turkmenistan', code: 'TM' },
        { name: 'Tuvalu', code: 'TV' },
        { name: 'Uganda', code: 'UG' },
        { name: 'Ukraine', code: 'UA' },
        { name: 'United Arab Emirates', code: 'AE' },
        { name: 'United Kingdom', code: 'GB' },
        { name: 'United States', code: 'US' },
        { name: 'Uruguay', code: 'UY' },
        { name: 'Uzbekistan', code: 'UZ' },
        { name: 'Vanuatu', code: 'VU' },
        { name: 'Vatican City', code: 'VA' },
        { name: 'Venezuela', code: 'VE' },
        { name: 'Vietnam', code: 'VN' },
        { name: 'Yemen', code: 'YE' },
        { name: 'Zambia', code: 'ZM' },
        { name: 'Zimbabwe', code: 'ZW' }
      ];
    
  this.currency =
      [
        { code: 'USD', name: 'United States Dollar', symbol: '$' },
        { code: 'EUR', name: 'Euro', symbol: '€' },
        { code: 'JPY', name: 'Japanese Yen', symbol: '¥' },
        { code: 'GBP', name: 'British Pound Sterling', symbol: '£' },
        { code: 'AUD', name: 'Australian Dollar', symbol: 'A$' },
        { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$' },
        { code: 'CHF', name: 'Swiss Franc', symbol: 'CHF' },
        { code: 'CNY', name: 'Chinese Yuan', symbol: '¥' },
        { code: 'SEK', name: 'Swedish Krona', symbol: 'kr' },
        { code: 'NZD', name: 'New Zealand Dollar', symbol: 'NZ$' },
        { code: 'AFN', name: 'Afghan Afghani', symbol: 'Af' },
        { code: 'ALL', name: 'Albanian Lek', symbol: 'L' },
        { code: 'DZD', name: 'Algerian Dinar', symbol: 'دج' },
        { code: 'AOA', name: 'Angolan Kwanza', symbol: 'Kz' },
        { code: 'ARS', name: 'Argentine Peso', symbol: '$' },
        { code: 'AMD', name: 'Armenian Dram', symbol: '֏' },
        { code: 'AWG', name: 'Aruban Florin', symbol: 'ƒ' },
        { code: 'AZN', name: 'Azerbaijani Manat', symbol: '₼' },
        { code: 'BSD', name: 'Bahamian Dollar', symbol: 'B$' },
        { code: 'BHD', name: 'Bahraini Dinar', symbol: '.د.ب' },
        { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳' },
        { code: 'BBD', name: 'Barbadian Dollar', symbol: 'Bds$' },
        { code: 'BYN', name: 'Belarusian Ruble', symbol: 'Br' },
        { code: 'BZD', name: 'Belize Dollar', symbol: 'BZ$' },
        { code: 'BMD', name: 'Bermudian Dollar', symbol: 'BD$' },
        { code: 'BTN', name: 'Bhutanese Ngultrum', symbol: 'Nu.' },
        { code: 'BOB', name: 'Bolivian Boliviano', symbol: 'Bs.' },
        { code: 'BAM', name: 'Bosnia and Herzegovina Convertible Mark', symbol: 'KM' },
        { code: 'BWP', name: 'Botswana Pula', symbol: 'P' },
        { code: 'BRL', name: 'Brazilian Real', symbol: 'R$' },
        { code: 'BND', name: 'Brunei Dollar', symbol: 'B$' },
        { code: 'BGN', name: 'Bulgarian Lev', symbol: 'лв' },
        { code: 'BIF', name: 'Burundian Franc', symbol: 'FBu' },
        { code: 'KHR', name: 'Cambodian Riel', symbol: '៛' },
        { code: 'CVE', name: 'Cape Verdean Escudo', symbol: 'Esc' },
        { code: 'KYD', name: 'Cayman Islands Dollar', symbol: 'CI$' },
        { code: 'XAF', name: 'Central African CFA Franc', symbol: 'FCFA' },
        { code: 'XPF', name: 'CFP Franc', symbol: '₣' },
        { code: 'CLP', name: 'Chilean Peso', symbol: '$' },
        { code: 'COP', name: 'Colombian Peso', symbol: '$' },
        { code: 'KMF', name: 'Comorian Franc', symbol: 'CF' },
        { code: 'CDF', name: 'Congolese Franc', symbol: 'FC' },
        { code: 'CRC', name: 'Costa Rican Colón', symbol: '₡' },
        { code: 'HRK', name: 'Croatian Kuna', symbol: 'kn' },
        { code: 'CUP', name: 'Cuban Peso', symbol: '$' },
        { code: 'CZK', name: 'Czech Koruna', symbol: 'Kč' },
        { code: 'DKK', name: 'Danish Krone', symbol: 'kr' },
        { code: 'DJF', name: 'Djiboutian Franc', symbol: 'Fdj' },
        { code: 'DOP', name: 'Dominican Peso', symbol: 'RD$' },
        { code: 'EGP', name: 'Egyptian Pound', symbol: '£' },
        { code: 'ERN', name: 'Eritrean Nakfa', symbol: 'Nfk' },
        { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'E' },
        { code: 'ETB', name: 'Ethiopian Birr', symbol: 'Br' },
        { code: 'FJD', name: 'Fijian Dollar', symbol: 'FJ$' },
        { code: 'GMD', name: 'Gambian Dalasi', symbol: 'D' },
        { code: 'GEL', name: 'Georgian Lari', symbol: '₾' },
        { code: 'GHS', name: 'Ghanaian Cedi', symbol: 'GH₵' },
        { code: 'GTQ', name: 'Guatemalan Quetzal', symbol: 'Q' },
        { code: 'GNF', name: 'Guinean Franc', symbol: 'FG' },
        { code: 'GYD', name: 'Guyanese Dollar', symbol: 'G$' },
        { code: 'HTG', name: 'Haitian Gourde', symbol: 'G' },
        { code: 'HNL', name: 'Honduran Lempira', symbol: 'L' },
        { code: 'HKD', name: 'Hong Kong Dollar', symbol: 'HK$' },
        { code: 'HUF', name: 'Hungarian Forint', symbol: 'Ft' },
        { code: 'ISK', name: 'Icelandic Króna', symbol: 'kr' },
        { code: 'INR', name: 'Indian Rupee', symbol: '₹' },
        { code: 'IDR', name: 'Indonesian Rupiah', symbol: 'Rp' },
        { code: 'IRR', name: 'Iranian Rial', symbol: '﷼' },
        { code: 'IQD', name: 'Iraqi Dinar', symbol: 'ع.د' },
        { code: 'ILS', name: 'Israeli New Shekel', symbol: '₪' },
        { code: 'JMD', name: 'Jamaican Dollar', symbol: 'J$' },
        { code: 'JOD', name: 'Jordanian Dinar', symbol: 'د.ا' },
        { code: 'KZT', name: 'Kazakhstani Tenge', symbol: '₸' },
        { code: 'KES', name: 'Kenyan Shilling', symbol: 'KSh' },
        { code: 'KWD', name: 'Kuwaiti Dinar', symbol: 'د.ك' },
        { code: 'KGS', name: 'Kyrgyzstani Som', symbol: 'лв' },
        { code: 'LAK', name: 'Lao Kip', symbol: '₭' },
        { code: 'LBP', name: 'Lebanese Pound', symbol: 'ل.ل' },
        { code: 'LSL', name: 'Lesotho Loti', symbol: 'L' },
        { code: 'LRD', name: 'Liberian Dollar', symbol: 'L$' },
        { code: 'LYD', name: 'Libyan Dinar', symbol: 'ل.د' },
        { code: 'MOP', name: 'Macanese Pataca', symbol: 'MOP$' },
        { code: 'MKD', name: 'Macedonian Denar', symbol: 'ден' },
        { code: 'MGA', name: 'Malagasy Ariary', symbol: 'Ar' },
        { code: 'MWK', name: 'Malawian Kwacha', symbol: 'MK' },
        { code: 'MYR', name: 'Malaysian Ringgit', symbol: 'RM' },
        { code: 'MVR', name: 'Maldivian Rufiyaa', symbol: 'Rf' },
        { code: 'MRO', name: 'Mauritanian Ouguiya', symbol: 'UM' },
        { code: 'MUR', name: 'Mauritian Rupee', symbol: '₨' },
        { code: 'MXN', name: 'Mexican Peso', symbol: '$' },
        { code: 'MDL', name: 'Moldovan Leu', symbol: 'L' },
        { code: 'MNT', name: 'Mongolian Tögrög', symbol: '₮' },
        { code: 'MAD', name: 'Moroccan Dirham', symbol: 'د.م.' },
        { code: 'MZN', name: 'Mozambican Metical', symbol: 'MT' },
        { code: 'MMK', name: 'Myanmar Kyat', symbol: 'K' },
        { code: 'NAD', name: 'Namibian Dollar', symbol: 'N$' },
        { code: 'NPR', name: 'Nepalese Rupee', symbol: '₨' },
        { code: 'NIO', name: 'Nicaraguan Córdoba', symbol: 'C$' },
        { code: 'NGN', name: 'Nigerian Naira', symbol: '₦' },
        { code: 'OMR', name: 'Omani Rial', symbol: 'ر.ع.' },
        { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨' },
        { code: 'PAB', name: 'Panamanian Balboa', symbol: 'B/.' },
        { code: 'PGK', name: 'Papua New Guinean Kina', symbol: 'K' },
        { code: 'PYG', name: 'Paraguayan Guaraní', symbol: '₲' },
        { code: 'PEN', name: 'Peruvian Sol', symbol: 'S/.' },
        { code: 'PHP', name: 'Philippine Peso', symbol: '₱' },
        { code: 'PLN', name: 'Polish Złoty', symbol: 'zł' },
        { code: 'QAR', name: 'Qatari Riyal', symbol: 'ر.ق' },
        { code: 'RON', name: 'Romanian Leu', symbol: 'lei' },
        { code: 'RUB', name: 'Russian Ruble', symbol: '₽' },
        { code: 'RWF', name: 'Rwandan Franc', symbol: 'RF' },
        { code: 'SHP', name: 'Saint Helena Pound', symbol: '£' },
        { code: 'WST', name: 'Samoan Tala', symbol: 'T' },
        { code: 'SAR', name: 'Saudi Riyal', symbol: 'ر.س' },
        { code: 'RSD', name: 'Serbian Dinar', symbol: 'дин' },
        { code: 'SCR', name: 'Seychellois Rupee', symbol: '₨' },
        { code: 'SLL', name: 'Sierra Leonean Leone', symbol: 'Le' },
        { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$' },
        { code: 'SBD', name: 'Solomon Islands Dollar', symbol: 'SI$' },
        { code: 'SOS', name: 'Somali Shilling', symbol: 'Sh' },
        { code: 'ZAR', name: 'South African Rand', symbol: 'R' },
        { code: 'KRW', name: 'South Korean Won', symbol: '₩' },
        { code: 'SSP', name: 'South Sudanese Pound', symbol: '£' },
        { code: 'LKR', name: 'Sri Lankan Rupee', symbol: '₨' },
        { code: 'SDG', name: 'Sudanese Pound', symbol: '£' },
        { code: 'SRD', name: 'Surinamese Dollar', symbol: '$' },
        { code: 'SZL', name: 'Swazi Lilangeni', symbol: 'E' },
        { code: 'SYP', name: 'Syrian Pound', symbol: '£' },
        { code: 'TWD', name: 'New Taiwan Dollar', symbol: 'NT$' },
        { code: 'TJS', name: 'Tajikistani Somoni', symbol: 'ЅМ' },
        { code: 'TZS', name: 'Tanzanian Shilling', symbol: 'TSh' },
        { code: 'THB', name: 'Thai Baht', symbol: '฿' },
        { code: 'TOP', name: 'Tongan Paʻanga', symbol: 'T$' },
        { code: 'TTD', name: 'Trinidad and Tobago Dollar', symbol: 'TT$' },
        { code: 'TND', name: 'Tunisian Dinar', symbol: 'د.ت' },
        { code: 'TRY', name: 'Turkish Lira', symbol: '₺' },
        { code: 'TMT', name: 'Turkmenistani Manat', symbol: 'm' },
        { code: 'UGX', name: 'Ugandan Shilling', symbol: 'USh' },
        { code: 'UAH', name: 'Ukrainian Hryvnia', symbol: '₴' },
        { code: 'AED', name: 'United Arab Emirates Dirham', symbol: 'د.إ' },
        { code: 'UYU', name: 'Uruguayan Peso', symbol: '$U' },
        { code: 'UZS', name: 'Uzbekistani Som', symbol: 'лв' },
        { code: 'VUV', name: 'Vanuatu Vatu', symbol: 'VT' },
        { code: 'VES', name: 'Venezuelan Bolívar Soberano', symbol: 'Bs.S' },
        { code: 'VND', name: 'Vietnamese Đồng', symbol: '₫' },
        { code: 'YER', name: 'Yemeni Rial', symbol: '﷼' },
        { code: 'ZMW', name: 'Zambian Kwacha', symbol: 'ZK' },
        { code: 'ZWL', name: 'Zimbabwean Dollar', symbol: 'Z$' },
      ];
  
  }

  ngOnDestroy(): void {
    
  }
  constructor( private confirmationService: ConfirmationService) { }

  display: boolean = false;
  
  clear1() {
    this.confirmationService.confirm({
        key: 'clear1',
        message: 'Data Saved Successfully'
    });
=======
export class AccountComponent implements OnInit {

  group = [{ field: "entity" }]
  filterMode: FilterableSettings = "menu";
  accountdata: any[] = [];
  selectedcounterPartyDetail:any
  displayOverlay: boolean = false;

  selectedCountry!: Country;
  selectedCurrency!: Currency;

  countries: Country[] = [
    {name: 'Germany', code: 'DE'},
    {name: 'France', code: 'FR'},
    {name: 'United Kingdom', code: 'GB'},
    {name: 'Italy', code: 'IT'},
    {name: 'Spain', code: 'ES'},
    {name: 'Portugal', code: 'PT'},
    {name: 'Netherlands', code: 'NL'},
    {name: 'Sweden', code: 'SE'},
    {name: 'Norway', code: 'NO'},
    {name: 'Finland', code: 'FI'}
  ];


  currencies: Currency[] = [
    {name: 'Euro', code: 'EUR'},
    {name: 'British Pound', code: 'GBP'},
    {name: 'Swiss Franc', code: 'CHF'},
    {name: 'Swedish Krona', code: 'SEK'},
    {name: 'Norwegian Krone', code: 'NOK'},
    {name: 'Danish Krone', code: 'DKK'},
    {name: 'Polish Złoty', code: 'PLN'},
    {name: 'Czech Koruna', code: 'CZK'},
    {name: 'Hungarian Forint', code: 'HUF'},
    {name: 'Russian Ruble', code: 'RUB'}
  ];

  ngOnInit(): void {
    this.getaccountData();
    
  }


  


  handlePopup(dataItem)  {
    this.displayOverlay = true;
    this.selectedcounterPartyDetail = dataItem;
    console.log(this.selectedcounterPartyDetail);
  }

  getaccountData(){
    this.accountdata=[
      {name:'counterparty1',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'},
      {name:'counterparty2',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty3',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'InActive'},
      {name:'counterparty4',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'Active'},
      {name:'counterparty5',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'},
      {name:'counterparty6',accountName:'HSBC',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty7',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'InActive'},
      {name:'counterparty8',accountName:'Barclays',country:'United Kingdom',currency:'GBP',isActive:'InActive'},
      {name:'counterparty9',accountName:'BBVA',country:'Spain',currency:'EUR',isActive:'Active'}


    ]
  }

  getCurrencyClass(Currency)
  {
    let baseClass = " pi pi-fw";
    switch (Currency) {
      case 'GBP':
        return `${baseClass} pi-pound`;
      case 'EUR':
        return `${baseClass} pi-euro`;
      case 'USD':
        return `${baseClass} pi-dollar`;
      default:
        return `${baseClass} pi-money-bill`;  // Fallback image if needed
    }
  }

  getCountryImageUrl(value)
  {
    let basePath = "assets/demo/images/country/";
    switch (value) {
      case 'United Kingdom':
        return `${basePath}uk-logo.png`;
      case 'Spain':
        return `${basePath}spain-logo.png`;
      default:
        return 'path/to/default-image.png';  // Fallback image if needed
    }
  }
>>>>>>> main
}


onSave(form: any) 
{
  if (form.valid) 
    {
      console.log('Form Data:', {
        counterpartyAccount: this.selectedcounterpartyAccount,
        bank: this.bank,
        accountNumber: this.accountNumber,
        country: this.selectedcountry,
        swiftBic: this.swiftBic,
        currency: this.selectedcurrency,
        sortCode: this.sortCode,
        isActive: this.isActive
      });

      this.display = true;

      this.clearForm();
      form.resetForm();
    }
}




clearForm() {
  this.selectedcounterpartyAccount = null;
  this.selectedcountry = null;
  this.selectedcurrency = null;
  this.bank = '';
  this.accountNumber = '';
  this.swiftBic = '';
  this.sortCode = '';
  this.isActive = false;
}

confirmClear() 
{
  this.confirmationService.confirm({
    key: 'clear2',
    message: 'Are you sure you want to clear the form?',
    header: 'Confirm',
    icon: 'pi pi-exclamation-triangle',
    accept: () => {
      this.clearForm();
    },
    reject: () => {
      // Do nothing on reject
    }
  });
}
}


