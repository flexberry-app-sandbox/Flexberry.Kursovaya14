import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/ru/translations';

import IISKursovaya14ДирОтдПоРабСКлLForm from './forms/i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l';
import IISKursovaya14ЗаключДоговораLForm from './forms/i-i-s-kursovaya14-заключ-договора-l';
import IISKursovaya14КлиентLForm from './forms/i-i-s-kursovaya14-клиент-l';
import IISKursovaya14РасторжДоговораLForm from './forms/i-i-s-kursovaya14-расторж-договора-l';
import IISKursovaya14РасчетОстВремLForm from './forms/i-i-s-kursovaya14-расчет-ост-врем-l';
import IISKursovaya14ДирОтдПоРабСКлEForm from './forms/i-i-s-kursovaya14-дир-отд-по-раб-с-кл-e';
import IISKursovaya14ЗаключДоговораEForm from './forms/i-i-s-kursovaya14-заключ-договора-e';
import IISKursovaya14КлиентEForm from './forms/i-i-s-kursovaya14-клиент-e';
import IISKursovaya14РасторжДоговораEForm from './forms/i-i-s-kursovaya14-расторж-договора-e';
import IISKursovaya14РасчетОстВремEForm from './forms/i-i-s-kursovaya14-расчет-ост-врем-e';
import IISKursovaya14ДирОтдПоРабСКлModel from './models/i-i-s-kursovaya14-дир-отд-по-раб-с-кл';
import IISKursovaya14ЗаключДоговораModel from './models/i-i-s-kursovaya14-заключ-договора';
import IISKursovaya14КлиентModel from './models/i-i-s-kursovaya14-клиент';
import IISKursovaya14ОказКонсультModel from './models/i-i-s-kursovaya14-оказ-консульт';
import IISKursovaya14РасторжДоговораModel from './models/i-i-s-kursovaya14-расторж-договора';
import IISKursovaya14РасчетОстВремModel from './models/i-i-s-kursovaya14-расчет-ост-врем';

const translations = {};
$.extend(true, translations, EmberFlexberryTranslations);

$.extend(true, translations, {
  models: {
    'i-i-s-kursovaya14-дир-отд-по-раб-с-кл': IISKursovaya14ДирОтдПоРабСКлModel,
    'i-i-s-kursovaya14-заключ-договора': IISKursovaya14ЗаключДоговораModel,
    'i-i-s-kursovaya14-клиент': IISKursovaya14КлиентModel,
    'i-i-s-kursovaya14-оказ-консульт': IISKursovaya14ОказКонсультModel,
    'i-i-s-kursovaya14-расторж-договора': IISKursovaya14РасторжДоговораModel,
    'i-i-s-kursovaya14-расчет-ост-врем': IISKursovaya14РасчетОстВремModel
  },

  'application-name': 'Kursovaya14',

  forms: {
    loading: {
      'spinner-caption': 'Данные загружаются, пожалуйста подождите...'
    },
    index: {
      greeting: 'Добро пожаловать на тестовый стенд ember-flexberry!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Меню'
          },
          'user-settings-service-checkbox': {
            caption: 'Использовать сервис сохранения пользовательских настроек'
          },
          'show-menu': {
            caption: 'Показать меню'
          },
          'hide-menu': {
            caption: 'Скрыть меню'
          },
          'language-dropdown': {
            caption: 'Язык приложения',
            placeholder: 'Выберите язык'
          }
        },
        login: {
          caption: 'Вход'
        },
        logout: {
          caption: 'Выход'
        }
      },

      footer: {
        'application-name': 'Kursovaya14',
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya14',
          title: 'Kursovaya14'
        },
        'application-version': {
          caption: 'Версия аддона {{version}}',
          title: 'Это версия аддона ember-flexberry, которая сейчас используется в этом тестовом приложении ' +
          '(версия npm-пакета + хэш коммита). ' +
          'Кликните, чтобы перейти на GitHub.'
        },
        index: {
          caption: 'Главная',
          title: ''
        },
        kursovaya14: {
          caption: 'Kursovaya14',
          title: 'Kursovaya14',
          'i-i-s-kursovaya14-заключ-договора-l': {
            caption: 'Заключ договора',
            title: ''
          },
          'i-i-s-kursovaya14-расчет-ост-врем-l': {
            caption: 'Расчет ост врем',
            title: ''
          },
          'i-i-s-kursovaya14-расторж-договора-l': {
            caption: 'Расторж договора',
            title: ''
          },
          'i-i-s-kursovaya14-клиент-l': {
            caption: 'Клиент',
            title: ''
          },
          'i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l': {
            caption: 'Дир отд по раб с кл',
            title: ''
          }
        }
      }
    },

    'edit-form': {
      'save-success-message-caption': 'Сохранение завершилось успешно',
      'save-success-message': 'Объект сохранен',
      'save-error-message-caption': 'Ошибка сохранения',
      'delete-success-message-caption': 'Удаление завершилось успешно',
      'delete-success-message': 'Объект удален',
      'delete-error-message-caption': 'Ошибка удаления'
    },
    'i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l': IISKursovaya14ДирОтдПоРабСКлLForm,
    'i-i-s-kursovaya14-заключ-договора-l': IISKursovaya14ЗаключДоговораLForm,
    'i-i-s-kursovaya14-клиент-l': IISKursovaya14КлиентLForm,
    'i-i-s-kursovaya14-расторж-договора-l': IISKursovaya14РасторжДоговораLForm,
    'i-i-s-kursovaya14-расчет-ост-врем-l': IISKursovaya14РасчетОстВремLForm,
    'i-i-s-kursovaya14-дир-отд-по-раб-с-кл-e': IISKursovaya14ДирОтдПоРабСКлEForm,
    'i-i-s-kursovaya14-заключ-договора-e': IISKursovaya14ЗаключДоговораEForm,
    'i-i-s-kursovaya14-клиент-e': IISKursovaya14КлиентEForm,
    'i-i-s-kursovaya14-расторж-договора-e': IISKursovaya14РасторжДоговораEForm,
    'i-i-s-kursovaya14-расчет-ост-врем-e': IISKursovaya14РасчетОстВремEForm
  },

});

export default translations;
