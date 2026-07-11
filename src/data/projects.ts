import type { Project } from './types';
import type { Locale } from '../i18n/LocaleContext';
import { projectsKo } from './projects.ko';
import { projectsEn } from './projects.en';

const projectsByLocale: Record<Locale, Project[]> = {
  ko: projectsKo,
  en: projectsEn,
};

export function getProjects(locale: Locale): Project[] {
  return projectsByLocale[locale];
}
