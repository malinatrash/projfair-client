<!-- eslint-disable vue/attribute-hyphenation -->
<template>
  <SkillsEditModal
    v-if="props.projectSkillList"
    v-model:is-show="showSkillsEditModal"
    v-model:skill-list="projectProposalForm.skillList"
    :shared-skill-list="props.projectSkillList"
  />
  <SpecialtyEditModal
    v-if="mentorSpecialties"
    v-model:is-show="showSpecialtyEditModal"
    v-model:specialty-list="projectProposalForm.specialtyList"
    :shared-specialty-list="mentorSpecialties"
  />
  <SpecialtyEditModal
    v-if="props.specialtyList"
    v-model:is-show="showAdditionalSpecialtyEditModal"
    v-model:specialty-list="projectProposalForm.additionalSpecialtyList"
    :shared-specialty-list="props.specialtyList"
  >
    <template #title>
      <h1>Редактирование приглашённых специальностей</h1>
    </template>
  </SpecialtyEditModal>

  <BasePanel>
    <FormSection
      :class="$style['project-type-section']"
      tag="1"
      title="Тип проекта"
      divider
    >
      <!-- <Project type> -->
      <BaseLabel
        is="fieldset"
        v-if="!isEditable"
        :class="$style['radio-buttons-label']"
        label="Тип проекта"
      >
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{
            projectProposalForm.isNewProject
              ? 'Новый проект'
              : 'Продолжить старый'
          }}
        </span>
        <div
          v-if="projectProposalForm.prevProjectId"
          style="display: flex; flex-direction: column; gap: 10px"
        >
          <hr style="border: 1px solid #eee" />
          <BaseButton
            :is="'router-link'"
            :to="toProjectRoute(projectProposalForm.prevProjectId)"
            :variant="'tag'"
            :style="'font-size: 14px'"
          >
            Открыть предыдущий проект ↗
          </BaseButton>
        </div>
      </BaseLabel>

      <BaseLabel
        is="fieldset"
        v-else
        :class="$style['radio-buttons-label']"
        label="Выберите тип проекта"
        required
      >
        <BaseRadioButton
          v-model="projectProposalForm.isNewProject"
          data-test-id="isNewProjectRadioButton"
          :value="true"
          :disabled="!isEditable"
        >
          Новый проект
        </BaseRadioButton>
        <BaseRadioButton
          v-model="projectProposalForm.isNewProject"
          data-test-id="isOldProjectRadioButton"
          :value="false"
          :disabled="!isEditable"
        >
          Продолжить старый
        </BaseRadioButton>
      </BaseLabel>
      <!-- </Project type> -->

      <!-- <Prev project> -->
      <BaseLabel
        is="div"
        v-if="isEditable"
        label="Выберите проект, который хотите продолжить"
      >
        <VMultiselect
          v-model="projectProposalForm.prevProjectId"
          data-test-id="prevProject"
          class="multiselect"
          :placeholder="
            props.isLoading
              ? 'Ваши проекты загружаются...'
              : !props.prevProjectList
              ? 'Ошибка загрузки ваших проектов'
              : props.prevProjectList?.length === 0
              ? 'Ваши старые проекты не найдены'
              : projectProposalFormValue.isNewProject
              ? 'Переключите тип проекта на «Продолжить старый»'
              : 'Выберите проект для продолжения'
          "
          no-results-text="Проект не найден"
          no-options-text="Проекты не найдены"
          :searchable="true"
          :options="prevProjectsMultiselectItems"
          :disabled="
            projectProposalFormValue.isNewProject ||
            props.isLoading ||
            prevProjectsMultiselectItems.length === 0 ||
            !props.canUserEdit
          "
        />
      </BaseLabel>

      <!-- </Prev project> -->
    </FormSection>

    <FormSection
      :class="$style['project-data-section']"
      tag="2"
      title="Данные о проекте"
      divider
    >
      <!-- <Project name> -->
      <BaseLabel v-if="!isEditable" label="Название проекта">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.projectName }}
        </span>
      </BaseLabel>

      <BaseLabel v-else label="Название проекта" required>
        <BaseTextarea
          v-model="projectProposalForm.projectName"
          data-test-id="projectName"
          :disabled="!isEditable"
          :class="$style['small-textarea']"
          placeholder="Например, платформа для размещения вузовских олимпиад"
          :maxLength="255"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project name> -->

      <!-- <Project goal> -->
      <BaseLabel v-if="!isEditable" label="Цель проекта">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.projectGoal }}
        </span>
      </BaseLabel>

      <BaseLabel v-else label="Цель проекта" required>
        <BaseTextarea
          v-model="projectProposalForm.projectGoal"
          data-test-id="projectGoal"
          :disabled="!isEditable"
          :class="$style['small-textarea']"
          placeholder="Например, создать платформу (страничку) для рекламы олимпиад"
          :maxLength="255"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project goal> -->

      <!-- <Project customer> -->
      <BaseLabel v-if="!isEditable" label="Заказчик">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.projectCustomer }}
        </span>
      </BaseLabel>

      <BaseLabel v-else label="Заказчик">
        <BaseInput
          v-model="projectProposalForm.projectCustomer"
          data-test-id="projectCustomer"
          :disabled="!isEditable"
          placeholder="ЦЭО, Лукьянов Н.Д."
        />
      </BaseLabel>
      <!-- </Project customer> -->

      <!-- <Project theme source> -->
      <BaseLabel is="div" v-if="!isEditable" label="Источник темы">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{
            themeSourcesMultiselectItems[
              projectProposalForm.projectThemeSourceId ?? 0
            ]?.label
          }}
        </span>
      </BaseLabel>

      <BaseLabel is="div" v-else label="Источник темы">
        <template #label="{ label }">
          <BaseTooltip
            :position-x="isSmallDevice ? 'left' : 'right'"
            message="Eсли на момент заполнения аннотации нет информации, ее можно предоставить позднее, в сроки оговоренные положением о проектном обучении, либо оставить поле пустым"
          >
            {{ label }}
          </BaseTooltip>
        </template>

        <template #default>
          <VMultiselect
            v-model="projectProposalForm.projectThemeSourceId"
            data-test-id="projectThemeSource"
            class="multiselect"
            :disabled="!isEditable"
            :placeholder="
              props.isLoading
                ? 'Источники темы загружаются...'
                : !props.themeSourceList
                ? 'Ошибка загрузки источников темы'
                : 'Ввыберите источник темы'
            "
            no-results-text="Источник не найден"
            no-options-text="Источники не найдены"
            :searchable="true"
            :options="themeSourcesMultiselectItems"
          />
        </template>
      </BaseLabel>
      <!-- </Project theme source> -->

      <!-- <Project duration> -->
      <BaseLabel
        is="fieldset"
        v-if="!isEditable"
        :class="$style['radio-buttons-label']"
        label="Длительность проекта"
      >
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{
            projectProposalForm.projectDuration === ProjectDuration.FallSemester
              ? `1 семестр (осень ${currentYear} года)`
              : projectProposalForm.projectDuration ===
                ProjectDuration.SpringSemester
              ? `1 семестр (весна ${currentYear + 1} года)`
              : `2 семестра (${currentYear} - ${currentYear + 1} год)`
          }}
        </span>
      </BaseLabel>

      <BaseLabel
        is="fieldset"
        v-else
        :class="$style['radio-buttons-label']"
        label="Длительность проекта"
        required
      >
        <BaseRadioButton
          v-model="projectProposalForm.projectDuration"
          data-test-id="projectDurationFallRadioButton"
          :disabled="
            !isEditable || getAcademicYear(new Date().getMonth()).isSpring()
          "
          :value="ProjectDuration.FallSemester"
        >
          1 семестр (осень {{ currentYear }} года)
        </BaseRadioButton>
        <BaseRadioButton
          v-model="projectProposalForm.projectDuration"
          data-test-id="projectDurationSpringRadioButton"
          :disabled="!isEditable"
          :value="ProjectDuration.SpringSemester"
        >
          1 семестр (весна {{ currentYear + 1 }} года)
        </BaseRadioButton>
        <BaseRadioButton
          v-model="projectProposalForm.projectDuration"
          data-test-id="projectDurationFullYearRadioButton"
          :disabled="
            !isEditable || getAcademicYear(new Date().getMonth()).isSpring()
          "
          :value="ProjectDuration.FullYear"
        >
          2 семестра ({{ currentYear }} - {{ currentYear + 1 }} год)
        </BaseRadioButton>
      </BaseLabel>
      <!-- </Project duration> -->

      <!-- <Project difficulty> -->
      <BaseLabel
        is="fieldset"
        v-if="!isEditable"
        :class="$style['radio-buttons-label']"
        label="Сложность проекта"
      >
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{
            projectProposalForm.projectDifficulty === ProjectDifficulty.Low
              ? 'Легкий'
              : projectProposalForm.projectDifficulty ===
                ProjectDifficulty.Medium
              ? 'Средний'
              : 'Сложный'
          }}
        </span>
      </BaseLabel>

      <BaseLabel
        is="fieldset"
        v-else
        :class="$style['radio-buttons-label']"
        label="Сложность проекта"
        required
      >
        <BaseRadioButton
          v-model="projectProposalForm.projectDifficulty"
          data-test-id="projectDifficultyLowRadioButton"
          :disabled="!isEditable"
          :value="ProjectDifficulty.Low"
        >
          Легкий
        </BaseRadioButton>
        <BaseRadioButton
          v-model="projectProposalForm.projectDifficulty"
          data-test-id="projectDifficultyMediumRadioButton"
          :disabled="!isEditable"
          :value="ProjectDifficulty.Medium"
        >
          Средний
        </BaseRadioButton>
        <BaseRadioButton
          v-model="projectProposalForm.projectDifficulty"
          data-test-id="projectDifficultyHighRadioButton"
          :disabled="!isEditable"
          :value="ProjectDifficulty.High"
        >
          Сложный
        </BaseRadioButton>
      </BaseLabel>
      <!-- </Project difficulty> -->
    </FormSection>

    <FormSection
      :class="$style['project-team-section']"
      tag="3"
      title="Роли в проекте"
      divider
    >
      <!-- <Jod developer> -->
      <BaseLabel
        is="div"
        v-if="!isEditable"
        :class="$style['institute-input']"
        label="Разработчик проекта"
      >
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ props.projectJobDeveloper }}
        </span>
      </BaseLabel>

      <BaseLabel
        is="div"
        v-else
        :class="$style['institute-input']"
        label="Разработчик проекта"
      >
        <template #label="{ label }">
          <BaseTooltip
            :position-x="isSmallDevice ? 'left' : 'right'"
            message="Разработчиком проекта становится сотрудник ИРНИТУ, создавший проектную заявку через Ярмарку проектов"
          >
            {{ label }}
          </BaseTooltip>
        </template>

        <template #default>
          <BaseInput
            :model-value="
              props.isLoading ? undefined : props.projectJobDeveloper
            "
            data-test-id="projectJobDeveloper"
            :placeholder="props.isLoading ? 'Загрузка проектной заявки...' : ''"
            disabled
          />
        </template>
      </BaseLabel>
      <!-- </Jod developer> -->

      <!-- <Project institute> -->
      <BaseLabel
        is="div"
        v-if="!isEditable"
        :class="$style['institute-input']"
        label="Подразделение, к которому будет привязан проект"
      >
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectDepartment?.name }}
        </span>
      </BaseLabel>

      <BaseLabel
        is="div"
        v-else
        :class="$style['institute-input']"
        label="Подразделение, к которому будет привязан проект"
      >
        <template #label="{ label }">
          <BaseTooltip
            :position-x="isSmallDevice ? 'left' : 'right'"
            message="Заполняется автоматически в зависимости от выбранного на проекте наставника"
          >
            {{ label }}
          </BaseTooltip>
        </template>

        <template #default>
          <BaseInput
            :model-value="projectDepartment?.name"
            :placeholder="
              projectMentor?.memberData
                ? 'Подразделение наставника не установлено'
                : 'Выберите наставника проекта'
            "
            data-test-id="projectDepartment"
            disabled
          />
        </template>
      </BaseLabel>
      <!-- </Project institute> -->

      <!-- <Project team> -->
      <BaseLabel
        is="div"
        v-if="props.supervisorList && !isEditable"
        :class="$style['institute-input']"
        label="ФИО преподавателя [Роль]"
        style="
          display: flex;
          flex-direction: column;
          gap: 5px;
          width: fit-content;
        "
      >
        <p
          v-for="team in projectProposalForm.team"
          :key="team.memberData?.id"
          class="label-text--disabled"
          style="
            display: inline-block;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ team.memberData?.fio }}
          [{{ MemberRoleText[team.role as MemberRole] }}]
        </p>
      </BaseLabel>

      <ProjectTeamCollect
        v-else-if="props.supervisorList"
        v-model:team="projectProposalForm.team"
        :supervisor-list="props.supervisorList"
        :role-list="projectProposalFormValue.sharedRoleList"
        :current-user-role-list="projectProposalFormValue.currentUserRoleList"
        :disable-all="!isEditable"
        data-test-id="teamComponent"
      >
        <template #add-button>
          <template v-if="props.isLoading">
            Преподаватели загружаются...
          </template>
          <template v-else-if="!props.supervisorList">
            Ошибка загрузки преподавателей
          </template>
          <template v-else>+ добавить сонаставника</template>
        </template>
      </ProjectTeamCollect>
      <!-- </Project team> -->
    </FormSection>

    <FormSection
      :class="$style['project-results-section']"
      tag="4"
      title="Описание и предполагаемые результаты проекта"
      divider
    >
      <!-- <Project expected result> -->
      <BaseLabel v-if="!isEditable" label="Ожидаемый результат">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.projectExpectedResult }}
        </span>
      </BaseLabel>

      <BaseLabel v-else required label="Ожидаемый результат">
        <BaseTextarea
          v-model="projectProposalForm.projectExpectedResult"
          data-test-id="projectExpectedResult"
          :disabled="!isEditable"
          :class="$style['small-textarea']"
          placeholder="Создать платформу (страничку) для рекламы олимпиад"
          :maxLength="1000"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project expected result> -->

      <!-- <Project requirements for participants> -->
      <BaseLabel v-if="!isEditable" label="Формируемые навыки">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.skillsToBeFormed }}
        </span>
      </BaseLabel>

      <BaseLabel v-else required label="Формируемые навыки">
        <BaseTextarea
          v-model="projectProposalForm.skillsToBeFormed"
          data-test-id="skillsToBeFormed"
          :disabled="!isEditable"
          :class="$style['small-textarea']"
          placeholder="Например, знание основ верстки  и дизайна веб-страниц"
          :maxLength="1000"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project requirements for participants> -->

      <!-- <Project description> -->
      <BaseLabel v-if="!isEditable" label="Описание проекта">
        <span
          class="label-text--disabled"
          style="
            display: inline-block;
            width: fit-content;
            padding: 0.25rem;
            font-size: 16px;
            color: var(--accent-color-1);
            background-color: #f1f4fe;
            border-radius: 6px;
          "
        >
          {{ projectProposalForm.projectDescription }}
        </span>
      </BaseLabel>

      <BaseLabel v-else required label="Описание проекта">
        <BaseTextarea
          v-model="projectProposalForm.projectDescription"
          data-test-id="projectDescription"
          :disabled="!isEditable"
          :class="$style['large-textarea']"
          placeholder="Опишите идею своего проекта"
          :maxLength="3000"
          resize="vertical"
        />
      </BaseLabel>
      <!-- </Project description> -->
    </FormSection>

    <FormSection
      tag="5"
      title="Направления (специальности), участников проекта"
      data-test-id="specialtyListSection"
    >
      <!-- <Project specialties> -->
      <p
        v-if="
          !props.canUserEdit &&
          props.projectProposalFormValue.specialtyList.length === 0
        "
      >
        <b>Основные направления не выбраны</b>
      </p>
      <TagList
        v-else-if="props.isLoading || mentorSpecialties.length > 0"
        show-all
        :tag-list="props.projectProposalFormValue.specialtyList"
      >
        <template #after-list>
          <BaseButton
            v-if="props.canUserEdit"
            case="none"
            variant="tag"
            :disabled="props.isLoading"
            @click="() => (showSpecialtyEditModal = true)"
          >
            <template v-if="props.isLoading">
              Специальности загружаются...
            </template>
            <template v-else-if="!props.specialtyList">
              Ошибка загрузки специальностей
            </template>
            <template v-else-if="!projectDepartment">
              Выберите наставника с кафедрой
            </template>
            <template v-else>Редактировать специальности +</template>
          </BaseButton>
        </template>
      </TagList>

      <p v-else>
        Кафедра <b>«{{ projectDepartment?.name }}»</b> не выпускает
        специальности.
        <br />
        <br />
        Вы можете пригласить любые специальности в пункте
        <b>6</b>, студенты этих направлений самостоятельно смогут подать заявку
        на участие в Вашем проекте.
      </p>
      <!-- </Project specialties> -->
    </FormSection>

    <FormSection
      tag="6"
      title="Приглашённые направления (специальности), участников проекта"
      divider
      data-test-id="additionalSpecialtyListSection"
    >
      <!-- <Project specialties> -->
      <p
        v-if="
          !props.canUserEdit &&
          projectProposalFormValue.additionalSpecialtyList.length === 0
        "
      >
        <b>Приглашённые направления не выбраны</b>
      </p>
      <TagList
        v-else
        show-all
        :tag-list="projectProposalFormValue.additionalSpecialtyList"
      >
        <template #after-list>
          <BaseButton
            v-if="props.canUserEdit"
            case="none"
            variant="tag"
            :disabled="props.isLoading"
            @click="() => (showAdditionalSpecialtyEditModal = true)"
          >
            <template v-if="props.isLoading">
              Специальности загружаются...
            </template>
            <template v-else-if="!props.specialtyList">
              Ошибка загрузки специальностей
            </template>
            <template v-else>Редактировать специальности +</template>
          </BaseButton>
        </template>
      </TagList>
      <!-- </Project specialties> -->
    </FormSection>

    <FormSection
      tag="7"
      title="Навыки, которые необходимы на проекте"
      data-test-id="skillListSection"
    >
      <!-- <Project skills> -->
      <p
        v-if="
          !props.canUserEdit && projectProposalFormValue.skillList.length === 0
        "
      >
        <b>Навыки не выбраны</b>
      </p>
      <TagList v-else show-all :tag-list="projectProposalFormValue.skillList">
        <template #after-list>
          <BaseButton
            v-if="props.canUserEdit"
            case="none"
            variant="tag"
            :disabled="props.isLoading"
            @click="() => (showSkillsEditModal = true)"
          >
            <template v-if="props.isLoading"> Навыки загружаются... </template>
            <template v-else-if="!props.projectSkillList">
              Ошибка загрузки навыков
            </template>
            <template v-else>Редактировать навыки +</template>
          </BaseButton>
        </template>
      </TagList>
      <!-- </Project skills> -->
    </FormSection>
  </BasePanel>
</template>

<script setup lang="ts">
  import VMultiselect from '@vueform/multiselect';
  import { toRefs } from '@vueuse/core';
  import { computed, reactive, ref, watch } from 'vue';
  import ProjectTeamCollect from '@/components/project/ProjectTeamCollect.vue';
  import SkillsEditModal from '@/components/skill/SkillsEditModal.vue';
  import SpecialtyEditModal from '@/components/specialty/SpecialtyEditModal.vue';
  import BaseButton from '@/components/ui/BaseButton.vue';
  import BaseInput from '@/components/ui/BaseInput.vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseRadioButton from '@/components/ui/BaseRadioButton.vue';
  import BaseTextarea from '@/components/ui/BaseTextarea.vue';
  import BaseTooltip from '@/components/ui/BaseTooltip.vue';
  import FormSection from '@/components/ui/FormSection.vue';
  import TagList from '@/components/ui/TagList.vue';
  import BaseLabel from '@/components/ui/label/BaseLabel.vue';
  import {
    ProjectDuration,
    ProjectProposalFormValue,
  } from '@/models/components/ProjectProposalForm';
  import { MultiselectObjectItem } from '@/models/components/VMultiselect';
  import { useSmallDevice } from '@/hooks/useBreakpoints';
  import { useProjectProposalMetaData } from '@/hooks/useProjectProposalMetaData';
  import { getAcademicYear } from '@/helpers/date';
  import { toProjectRoute } from '@/router/utils/routes';
  import { Project, Skill } from '@/models/Project';
  import { ProjectDifficulty } from '@/models/ProjectDifficulty';
  import { MemberRole, MemberRoleText } from '@/models/ProjectProposal';
  import { Specialty } from '@/models/Specialty';
  import { Supervisor } from '@/models/Supervisor';
  import { Tag } from '@/models/Tag';

  type Props = {
    projectProposalFormValue: ProjectProposalFormValue;
    canUserEdit?: boolean;
    isLoading?: boolean;
    prevProjectList?: Project[];
    supervisorList: Supervisor[];
    projectSkillList?: Skill[];
    specialtyList?: Specialty<number>[];
    themeSourceList?: Tag<number>[];
    projectJobDeveloper?: string;
  };
  type Emits = {
    (
      event: 'update:projectProposalFormValue',
      projectProposalFormValue: ProjectProposalFormValue,
    ): void;
  };

  const props = withDefaults(defineProps<Props>(), {
    canUserEdit: true,
    isLoading: false,
    prevProjectList: undefined,
    projectSkillList: undefined,
    specialtyList: undefined,
    supervisorList: undefined,
    themeSourceList: undefined,
    projectJobDeveloper: undefined,
  });
  const emit = defineEmits<Emits>();

  const { projectProposalFormValue, specialtyList } = toRefs(props);

  const isSmallDevice = useSmallDevice();
  const showSkillsEditModal = ref<boolean>(false);
  const showSpecialtyEditModal = ref<boolean>(false);
  const showAdditionalSpecialtyEditModal = ref<boolean>(false);

  const currentMonth = new Date(Date.now()).getMonth();
  const currentYear = getAcademicYear(currentMonth).academicYear();

  const projectProposalForm = reactive<ProjectProposalFormValue>(
    props.projectProposalFormValue,
  );

  const isEditable = computed(() => !props.isLoading && props.canUserEdit);

  const { mentorSpecialties, projectDepartment, projectMentor } =
    useProjectProposalMetaData(projectProposalFormValue, specialtyList);

  const prevProjectsMultiselectItems = computed<
    MultiselectObjectItem<number>[]
  >(
    () =>
      props.prevProjectList?.map((project) => ({
        label: `${project.date_start} ${project.title}`,
        value: project.id,
      })) || [],
  );

  const themeSourcesMultiselectItems = computed<
    MultiselectObjectItem<number>[]
  >(
    () =>
      props.themeSourceList?.map((source) => ({
        label: source.name,
        value: source.id,
      })) || [],
  );

  watch(
    () => props.projectProposalFormValue,
    (projectProposalFormValue) =>
      Object.assign<ProjectProposalFormValue, ProjectProposalFormValue>(
        projectProposalForm,
        projectProposalFormValue,
      ),
    { deep: true },
  );
  watch(
    () => projectProposalForm,
    (projectProposalForm) =>
      emit('update:projectProposalFormValue', projectProposalForm),
    { deep: true },
  );
  watch(
    () => [projectDepartment.value?.id, isEditable.value],
    ([departmentId, isEditable], [prevDepartmentId]) => {
      if (!isEditable) return;
      if (!prevDepartmentId) return;
      if (departmentId === prevDepartmentId) return;
      projectProposalForm.specialtyList = [];
    },
  );
  watch(
    () => projectProposalForm.isNewProject,
    (isNewProject) => {
      if (isNewProject) projectProposalForm.prevProjectId = null;
    },
  );
</script>

<style lang="scss" module>
  .radio-buttons-label {
    display: flex;
    flex-direction: column;
    gap: 0.625rem;
    justify-self: flex-start;
  }

  .small-textarea {
    min-height: 8.375rem;
  }

  .large-textarea {
    min-height: 21.25rem;
  }

  .project-type-section {
    display: grid;
    grid-template-columns: 3fr 4fr;
    gap: 1rem;
  }

  .institute-input {
    margin-bottom: 1.5rem;
  }

  .project-team-section {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr;
    column-gap: 1.5rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 1;
    }

    & > *:nth-child(3) {
      grid-column: 1 / -1;
    }
  }

  .project-data-section {
    display: grid;
    grid-template-columns: 4fr 1fr 3fr;
    gap: 1.5rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 1;
    }

    & > *:nth-child(3) {
      grid-column: 1;
    }

    & > *:nth-child(4) {
      grid-column: 1;
    }

    & > *:nth-child(5) {
      grid-row: 1;
      grid-column: 3;
    }

    & > *:nth-child(6) {
      grid-row: 2;
      grid-column: 3;
    }
  }

  .project-results-section {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 1.875rem;

    & > *:nth-child(1) {
      grid-column: 1;
    }

    & > *:nth-child(2) {
      grid-column: 2;
    }

    & > *:nth-child(3) {
      grid-row: 2;
      grid-column: 1 / -1;
    }
  }
</style>
