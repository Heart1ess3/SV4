import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: {
        translation: {
          title: "Ski resorts",
          filter: "Filter by title",
          sortOrder: "Sort Order",
          ascending: "By name A-Z",
          descending: "By name Z-A",
          delete: "Delete",
          edit: "Edit",
          newTitle: "Enter the new title:",
          newDescription: "Enter the new description:",
        },
      },
      ru: {
        translation: {
          title: "Горголыжные курорты",
          filter: "Фильтр по названию",
          sortOrder: "Порядок сортировки",
          ascending: "От А до Z",
          descending: "От Z до A",
          delete: "Удалить",
          edit: "Изменить",
          newTitle: "Введите новое название:",
          newDescription: "Введите новое описание:",
        },
      },
    },
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;