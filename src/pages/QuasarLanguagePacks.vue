<template>
  <q-page class="q-pa-xl">
    <section class="q-mb-xl">
      <div class="text-h4">Change Quasar Language Pack at Runtime</div>
      <q-separator class="q-my-md" />
      <q-select
        v-model="lang"
        :options="langOptions"
        label="퀘이사 언어"
        outlined
        emit-value
        map-options
      />
      {{ lang }}
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">$q.lang</div>
      <q-separator class="q-my-md" />
      <div>{{ $q.lang }}</div>
    </section>
    <section class="q-mb-xl">
      <div class="text-h4">i18n - locale</div>
      <q-separator class="q-my-md" />
      <div>locale - {{ locale }}</div>
      <div>hello - {{ $t('hello') }}</div>
      <div>productName - {{ $t('productName') }}</div>
    </section>
  </q-page>
</template>

<script>
import language from 'quasar/lang/index.json';

const appLang = language.filter(lang =>
  ['ko-KR', 'en-US'].includes(lang.isoName),
);

const langOptions = appLang.map(lang => ({
  label: lang.nativeName,
  value: lang.isoName,
}));
</script>

<script setup>
import { ref, watch } from 'vue';
import { useQuasar } from 'quasar';
import { useI18n } from 'vue-i18n';

const $q = useQuasar();

const lang = ref($q.lang.isoName);

watch(lang, val => {
  console.log('val : ', val);
  import('../../node_modules/quasar/lang/' + val).then(lang => {
    $q.lang.set(lang.default);
    $q.localStorage.set('lang', val);
    locale.value = val;
  });
});

const { t, locale } = useI18n();
console.log('hello: ', t('hello'));
console.log('productName: ', t('productName'));
</script>

<style lang="scss" scoped></style>
