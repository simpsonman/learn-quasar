<template>
  <q-page padding>
    <section class="row q-col-gutter-x-xl q-py-lg">
      <div class="col-12 col-sm-auto q-py-md flex flex-center">
        <q-avatar size="150px">
          <q-img
            src="https://phinf.pstatic.net/contact/20231218_206/1702863871039gCYAk_PNG/%BA%ED%B7%CE%B1%D7_%C7%C1%B7%CE%C7%CA.png?type=s160"
          />
        </q-avatar>
      </div>
      <div class="col-12 col-sm-grow column justify-between">
        <div class="row items-center">
          <span class="text-h6 text-weight-bold">drsimpson</span>
          <q-space />
          <div class="q-gutter-x-sm">
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn outline color="secondary" label="프로필 편집1" />
            <q-btn flat color="secondary" icon="more_horiz" />
          </div>
        </div>
        <div class="q-gutter-x-lg">
          <span>게시물 238</span>
          <span>팔로워 2,032</span>
          <span>팔로우 1,432</span>
        </div>
        <div>
          <div>프로듀서</div>
          <div>오오</div>
          <div>nagun@vanillasee.com</div>
        </div>
      </div>
    </section>
    <section>
      <div class="row no-wrap scroll q-col-gutter-x-xl">
        <div class="col-auto" v-for="n in 15" :key="n">
          <article>
            <q-avatar size="70px">
              <q-img
                src="https://phinf.pstatic.net/contact/20231218_206/1702863871039gCYAk_PNG/%BA%ED%B7%CE%B1%D7_%C7%C1%B7%CE%C7%CA.png?type=s160"
              ></q-img>
            </q-avatar>
            <div class="text-center q-mt-sm">제목</div>
          </article>
        </div>
      </div>
    </section>
    <section class="q-mt-xl">
      <div class="row q-col-gutter-md">
        <div v-for="n in 18" :key="n" class="col-12 col-sm-6 col-md-4 col-lg-3">
          <q-card class="my-card">
            <q-img ratio="1" src="https://cdn.quasar.dev/img/parallax2.jpg">
              <div
                class="absolute-bottom text-subtitle2 flex flex-center full-height"
              >
                Title
              </div>
            </q-img>
          </q-card>
        </div>
      </div>
    </section>
  </q-page>
</template>

<script setup></script>

<style lang="scss" scoped>
.q-page {
  background-color: #fafafa;
}
</style>
