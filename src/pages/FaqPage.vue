<template>
  <PageLayout>
    <header class="header">
      <h1 class="title page-title">Вопрос-ответ</h1>
      <p class="page-subtitle subtitle">
        На этой странице размещены частозадаваемые вопросы. Вы всегда можете
        задать свой вопрос нам и мы ответим на него лично или разместим в данном
        разделе.
      </p>
    </header>

    <!-- ВОПРОСЫ -->
    <QuestionAccordion>
      <template #title>Как узнать сроки подачи заявок на проекты?</template>
      <template #content>
        О сроках подачи заявок на проекты вы будете уведомлены через рассылку в
        <RouterLink :to="{ name: RouteNames.CANDIDATE_PARTICIPATIONS }">
          личном кабинете
        </RouterLink>
        кампуса и на электронной почте. Также информация будет доступна на
        главной странице платформы «Ярмарка проектов».
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title
        >Что делать, если не получается подать заявку на проект?</template
      >
      <template #content>
        Подать заявку на проект <b>не</b> могут:
        <ul>
          <li>студенты 1-2 курса</li>
          <li>отчислившиеся студенты</li>
          <li>студенты в академическом отпуске</li>
          <li>магистранты</li>
          <li>заочники</li>
        </ul>
        <br />
        Функция подачи заявок для остальных студентов разблокируется в период
        приёма заявок, о начале которого студенты будут уведомлены.
        <br />
        <br />
        Если Вы не можете подать заявку на проект по другой причине, свяжитесь с
        <RouterLink :to="{ name: RouteNames.CONTACTS }">
          технической поддержкой </RouterLink
        >.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>Как поменять приоритет/отозвать заявку?</template>
      <template #content>
        Вы можете изменить приоритет или отозвать заявку в разделе
        <RouterLink :to="{ name: RouteNames.CANDIDATE_PARTICIPATIONS }">
          «Мои заявки»
        </RouterLink>
        личного кабинета.
        <br />
        <br />
        Отозвав заявку, вы теряете место в очереди на зачисление. (место зависит
        от приоритета и времени подачи заявки)
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>Как узнать статус своей заявки?</template>
      <template #content>
        Статус вашей заявки можно проверить в личном кабинете в разделе
        <RouterLink :to="{ name: RouteNames.CANDIDATE_PARTICIPATIONS }">
          «Мои заявки» </RouterLink
        >. Там отображается информация о текущем приоритете и статусе
        распределения.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title> Как происходит распределение заявок? </template>
      <template #content>
        Система распределяет заявки, учитывая приоритеты: 1-й приоритет означает
        наиболее желаемый проект, а 3-й — менее предпочтительный. Если студент
        не подал заявку, его распределят на проект с оставшимися свободными
        местами.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>Что будет, если я не подам заявку?</template>
      <template #content>
        Система автоматически распределит студентов по свободным проектам,
        которые не подали заявки исходя из их специальностей и навыков.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title
        >Что делать, если я не могу подать заявку на определенный
        проект?</template
      >
      <template #content>
        Если проект недоступен для подачи заявки, проверьте сроки подачи и
        статус вашего профиля:
        <ul>
          <li>отчисленный</li>
          <li>в академическом отпуске</li>
          <li>заочное обучение</li>
          <li>неподходящий институт</li>
          <li>неподходящий курс(1-2)</li>
        </ul>
        <br />
        <br />
        Если проблема сохраняется, обратитесь в
        <RouterLink :to="{ name: RouteNames.CONTACTS }">
          техническую поддержку </RouterLink
        >.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>Что такое приоритет?</template>
      <template #content>
        При подаче заявки на несколько проектов вы расставляете приоритеты,
        чтобы система могла учесть ваши предпочтения при распределении. 1-й
        приоритет означает наиболее желаемый проект, а 3-й — менее
        предпочтительный.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>
        Могу ли я участвовать одновременно в нескольких проектах?
      </template>
      <template #content>
        Нет, участие возможно только в одном проекте. Однако, вы можете подать
        заявки на три проекта одновременно, указав их приоритет. При
        распределении система учитывает указанный приоритет и кол-во мест.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>
        Как выбрать проект, подходящий для моего уровня подготовки?
      </template>
      <template #content>
        Каждый проект имеет описание, в котором указаны необходимые навыки и
        уровень подготовки. Внимательно изучите требования и выберите проекты,
        соответствующие вашему опыту.
        <br />
        <br />
        Если у вас есть сомнения, свяжитесь с куратором проекта для уточнения.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>
        Будет ли еще возможность выбрать проект после окончания срока приема
        заявок?
      </template>
      <template #content>
        Нет, после окончания срока приема заявок, если заявка не была подана
        студентом, система автоматически распределят на проект с оставшимися
        свободными местами.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>
        Я перевелся в другой институт и не вижу проекты своего нового института,
        что делать?
      </template>
      <template #content>
        Вам необходимо привязать ваш аккаунт на Кампусе ИРНИТУ к новому
        институту, для этого обратитесь в
        <a target="_blank" href="https://int.istu.edu/register/help/">
          службу поддержки Кампуса </a
        >.
      </template>
    </QuestionAccordion>

    <QuestionAccordion>
      <template #title>
        Могу ли я сменить проект после начала работы над ним?
      </template>
      <template #content>
        После начала работы над проектом смена невозможна.
      </template>
    </QuestionAccordion>

    <ContactForm />
  </PageLayout>
</template>

<script setup lang="ts">
  import QuestionAccordion from '../components/ui/accordion/QuestionAccordion.vue';
  import PageLayout from '@/components/layout/PageLayout.vue';
  import ContactForm from '@/components/layout/contact/ContactForm.vue';
  import { RouteNames } from '@/router/types/route-names';
</script>

<style lang="scss" scoped>
  @import '@styles/breakpoints';

  .header {
    margin-top: 4.75rem;
    margin-bottom: 2.8125rem;

    @media (max-width: $tablet) {
      margin-top: 1.875rem;
    }
  }

  .line {
    display: flex;
    flex-direction: row;
  }

  .space-left {
    margin-left: 0.75rem;
  }

  .subtitle {
    max-width: 50rem;
    margin-top: 0.6875rem;
  }
</style>
