import $ from 'jquery';
import EmberFlexberryTranslations from 'ember-flexberry/locales/en/translations';

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
      'spinner-caption': 'Loading stuff, please wait for a moment...'
    },
    index: {
      greeting: 'Welcome to ember-flexberry test stand!'
    },

    application: {
      header: {
        menu: {
          'sitemap-button': {
            title: 'Menu'
          },
          'user-settings-service-checkbox': {
            caption: 'Use service to save user settings'
          },
          'show-menu': {
            caption: 'Show menu'
          },
          'hide-menu': {
            caption: 'Hide menu'
          },
          'language-dropdown': {
            caption: 'Application language',
            placeholder: 'Choose language'
          }
        },
        login: {
          caption: 'Login'
        },
        logout: {
          caption: 'Logout'
        }
      },

      footer: {
        'application-name': 'Kursovaya14',
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        }
      },

      sitemap: {
        'application-name': {
          caption: 'Kursovaya14',
          title: 'Kursovaya14'
        },
        'application-version': {
          caption: 'Addon version {{version}}',
          title: 'It is version of ember-flexberry addon, which uses in this dummy application ' +
          '(npm version + commit sha). ' +
          'Click to open commit on GitHub.'
        },
        index: {
          caption: 'Home',
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
      'save-success-message-caption': 'Save operation succeed',
      'save-success-message': 'Object saved',
      'save-error-message-caption': 'Save operation failed',
      'delete-success-message-caption': 'Delete operation succeed',
      'delete-success-message': 'Object deleted',
      'delete-error-message-caption': 'Delete operation failed'
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
