<template>
  <q-page class="flex flex-center">
    <q-card flat :style="{ minWidth: '400px' }">
      <q-card-section
        ><div class="text-h6 text-weight-bold">로그인 하기</div>
        <div class="text-subtitle2 text-grey">또 와주셔서 감사합니다.</div>
      </q-card-section>
      <q-card-section>
        <q-form>
          <div class="q-gutter-y-lg">
            <q-input
              filled
              label="이메일"
              hint="Email을 입력해주세요."
            ></q-input>
            <q-input
              filled
              type="password"
              label="비밀번호"
              hint="영문 대/소문자 포함 8자 이상"
            ></q-input>
          </div>
          <q-btn
            class="full-width q-mt-lg"
            unelevated
            color="primary"
            size="lg"
            label="로그인 하기"
          />
          <q-btn
            class="full-width q-mt-md"
            flat
            label="회원가입"
            to="/auth/sign-up"
          />
          <q-btn
            class="full-width q-mt-xs"
            flat
            label="대시보드로 이동"
            to="/"
          />
        </q-form>
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script setup></script>
