import { useLocale } from '../i18n/LocaleContext';
import './LocaleToggle.css';

export function LocaleToggle() {
  const { locale, setLocale } = useLocale();

  return (
    <div className="locale-toggle">
      <button
        type="button"
        data-cursor-hover
        data-active={locale === 'ko'}
        onClick={() => setLocale('ko')}
      >
        KO
      </button>
      <span>/</span>
      <button
        type="button"
        data-cursor-hover
        data-active={locale === 'en'}
        onClick={() => setLocale('en')}
      >
        EN
      </button>
    </div>
  );
}
