import Controller from '@ember/controller';
import { computed } from '@ember/object';

export default Controller.extend({
  sitemap: computed('i18n.locale', function () {
    let i18n = this.get('i18n');

    return {
      nodes: [
        {
          link: 'index',
          icon: 'home',
          caption: i18n.t('forms.application.sitemap.index.caption'),
          title: i18n.t('forms.application.sitemap.index.title'),
          children: null
        }, {
          link: null,
          icon: 'list',
          caption: i18n.t('forms.application.sitemap.kursovaya14.caption'),
          title: i18n.t('forms.application.sitemap.kursovaya14.title'),
          children: [{
            link: 'i-i-s-kursovaya14-заключ-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-заключ-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-заключ-договора-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya14-расчет-ост-врем-l',
            caption: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-расчет-ост-врем-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-расчет-ост-врем-l.title'),
            icon: 'book',
            children: null
          }, {
            link: 'i-i-s-kursovaya14-расторж-договора-l',
            caption: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-расторж-договора-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-расторж-договора-l.title'),
            icon: 'tags',
            children: null
          }, {
            link: 'i-i-s-kursovaya14-клиент-l',
            caption: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-клиент-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-клиент-l.title'),
            children: null
          }, {
            link: 'i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l',
            caption: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l.caption'),
            title: i18n.t('forms.application.sitemap.kursovaya14.i-i-s-kursovaya14-дир-отд-по-раб-с-кл-l.title'),
            icon: 'suitcase',
            children: null
          }]
        }
      ]
    };
  }),
})