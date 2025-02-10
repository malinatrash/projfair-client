<template>
  <div style="position: relative">
    <BaseStub
      v-if="query.isLoading.value"
      title="Получем список студентов..."
      subtitle="Можете пока выпить чай :)"
    />

    <BasePanel v-if="silents.length" class="institute-card">
      <SimpleAccordion>
        <template #title>
          <div class="accordion-title">
            <p class="title" style="font-size: 22px">
              Потерянные студенты
              <span class="title-description">
                Кол-во студентов без проекта:
                <span style="color: var(--accent-color-1)">{{
                  silents.length
                }}</span>
              </span>
            </p>
          </div>
        </template>

        <template #content>
          <div class="inner-accordion-content">
            <div
              v-for="silent in silents
                .slice()
                .sort((a, b) => a.candidate_id - b.candidate_id)"
              :key="silent.candidate_id"
            >
              <div class="icon-project">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4f5569"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  class="lucide lucide-user"
                >
                  <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                  <circle cx="12" cy="7" r="4" />
                </svg>
              </div>

              <p class="title" style="font-size: 20px">
                {{ silent.fio }}
                <span class="title-description">
                  id:
                  <span style="color: var(--accent-color-1)">{{
                    silent.candidate_id
                  }}</span>
                </span>
              </p>
            </div>
          </div>
        </template>
      </SimpleAccordion>
    </BasePanel>

    <BasePanel
      v-for="institute in participations"
      :key="institute?.institute_id"
      class="institute-card"
    >
      <SimpleAccordion>
        <template #title>
          <div class="accordion-title">
            <p class="title">
              {{ institute?.institute_name }}
              <span class="title-description">
                id:
                <span style="color: var(--accent-color-1)">{{
                  institute.institute_id
                }}</span>
                | Кол-во студентов без проекта:
                <span style="color: var(--accent-color-1)">{{
                  institute.departments.flatMap((department) =>
                    department.courses.flatMap((course) =>
                      course.specialities.flatMap(
                        (speciality) => speciality.candidates,
                      ),
                    ),
                  ).length
                }}</span>
              </span>
            </p>
          </div>
        </template>

        <template #content class="institute-content">
          <SimpleAccordion
            v-for="department in institute.departments
              .slice()
              .sort(
                (a, b) => Number(a.department_id) - Number(b.department_id),
              )"
            :key="department.department_id"
          >
            <template #title>
              <div class="accordion-title">
                <p class="title" style="font-size: 22px">
                  Кафедра «{{ department.department_name }}»
                  <span class="title-description">
                    id:
                    <span style="color: var(--accent-color-1)">{{
                      department.department_id
                    }}</span>
                    | Кол-во студентов без проекта:
                    <span style="color: var(--accent-color-1)">{{
                      department.courses.flatMap((course) =>
                        course.specialities.flatMap(
                          (speciality) => speciality.candidates,
                        ),
                      ).length
                    }}</span>
                  </span>
                </p>
              </div>
            </template>

            <template #content>
              <SimpleAccordion
                v-for="course in department.courses
                  .slice()
                  .sort((a, b) => a.course - b.course)"
                :key="course.course"
              >
                <template #title>
                  <div class="accordion-title">
                    <p class="title" style="font-size: 22px">
                      {{ course.course }} курс
                      <span class="title-description">
                        Кол-во студентов без проекта:
                        <span style="color: var(--accent-color-1)">{{
                          course.specialities.flatMap(
                            (speciality) => speciality.candidates,
                          ).length
                        }}</span>
                      </span>
                    </p>
                  </div>
                </template>

                <template #content>
                  <SimpleAccordion
                    v-for="speciality in course.specialities
                      .slice()
                      .sort(
                        (a, b) =>
                          Number(a.speciality_id) - Number(b.speciality_id),
                      )"
                    :key="speciality.speciality_id"
                  >
                    <template #title>
                      <div class="accordion-title">
                        <p class="title" style="font-size: 22px">
                          Группа {{ speciality.speciality_name }}
                          <span class="title-description">
                            Кол-во студентов без проекта:
                            <span style="color: var(--accent-color-1)">{{
                              speciality.candidates.length
                            }}</span>
                          </span>
                        </p>
                      </div>
                    </template>

                    <template #content>
                      <div class="inner-accordion-content">
                        <div
                          v-for="(candidate, index) in speciality.candidates
                            .slice()
                            .sort((a, b) => a.candidate_id - b.candidate_id)"
                          :key="candidate.candidate_id"
                        >
                          <div
                            class="icon-project"
                            style="
                              display: flex;
                              gap: 15px;
                              align-items: center;
                            "
                          >
                            {{ index + 1 }}
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="#4f5569"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              class="lucide lucide-user"
                            >
                              <path
                                d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"
                              />
                              <circle cx="12" cy="7" r="4" />
                            </svg>
                          </div>

                          <p class="title" style="font-size: 20px">
                            {{ candidate.fio }}
                            <span class="title-description">
                              id:
                              <span style="color: var(--accent-color-1)">{{
                                candidate.candidate_id
                              }}</span>
                            </span>
                          </p>
                        </div>
                      </div>
                    </template>
                  </SimpleAccordion>
                </template>
              </SimpleAccordion>
            </template>
          </SimpleAccordion>
        </template>
      </SimpleAccordion>
    </BasePanel>
  </div>
</template>

<script setup lang="ts">
  import { computed } from '@vue/runtime-core';
  import { ref } from 'vue';
  import BasePanel from '@/components/ui/BasePanel.vue';
  import BaseStub from '@/components/ui/BaseStub.vue';
  import SimpleAccordion from '@/components/ui/accordion/SimpleAccordion.vue';
  import { useGetArmStudentsListQuery } from '../../api/ArmApi/hooks/useGetArmStudentsListQuery';
  import { ArmCandidate, ArmInstitute } from '../../models/ArmStudents';
  import { ArmInstitute as ArmStudentsInstitute } from '@/models/ArmStudents';

  const query = useGetArmStudentsListQuery();

  const silents = ref<ArmCandidate[]>([]);

  const participations = computed<ArmStudentsInstitute[]>(() =>
    ((query.data.value as ArmStudentsInstitute[]) ?? [])
      .filter((institute: ArmInstitute) => {
        if (!institute.institute_id) {
          institute.departments.forEach((department) =>
            department.courses.map((course) =>
              course.specialities.map((speciality) =>
                speciality.candidates.map((candidate) => {
                  silents.value.push(candidate);
                }),
              ),
            ),
          );
        }

        return institute.institute_id;
      })
      .slice()
      .sort(
        (a: ArmInstitute, b: ArmInstitute) =>
          Number(a.institute_id) - Number(b.institute_id),
      ),
  );
</script>

<style lang="scss" scoped>
  $padding: 20px;

  .panel {
    padding: 0 $padding;

    &:has(.accordion.opened) {
      padding-bottom: $padding;
    }
  }

  .title {
    font-size: 24px;
    line-height: normal;
    color: #4f5569;
  }

  .input {
    $input-width: 85px;

    min-width: $input-width;
    max-width: $input-width;
    text-align: center;
  }

  .inner-accordion-content {
    & .title {
      display: flex;
      flex: 1;
      flex-direction: column;
      gap: 5px;
      justify-content: center;
      font-weight: 700;

      &-description {
        font-size: 16px;
        font-weight: 600;
        color: var(--gray-color-2);
      }
    }

    & > *:not(.accordion) {
      display: flex;
      flex-direction: row;
      gap: $padding;
      align-items: center;
      justify-content: space-between;
      padding: $padding 0;
      padding-right: 45px;
      border-bottom: 1px solid var(--gray-color-1);

      @media (width <= 500px) {
        flex-wrap: wrap;
      }
    }
  }

  .accordion {
    &-title {
      display: flex;
      gap: 15px;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding: $padding 0;
      padding-right: 26.5px;

      & .title {
        display: flex;
        flex-direction: column;
        gap: 5px;
        justify-content: center;

        &-description {
          font-size: 16px;
          color: var(--gray-color-2);
        }
      }

      &:hover .title {
        color: var(--accent-color-1);
      }

      @media (width <= 500px) {
        flex-wrap: wrap;

        & .title {
          font-size: 20px;

          &-description {
            font-size: 14px;
          }
        }
      }
    }

    &.opened > header > button > div > p.title {
      color: var(--accent-color-1);
    }

    &.opened:deep(.header > button.title) {
      border-bottom: 1px solid var(--gray-color-1);
    }

    &.opened:deep(.content) {
      border-left: 2px dashed var(--gray-color-1);
      transition: 0.05s ease-in-out;

      // &:hover {
      //   border-left: 2px solid var(--accent-color-1);
      // }

      &:has(> .inner-accordion-content) {
        background-color: white;
        border-left: 4px solid var(--accent-color-2);
      }
    }

    &:deep(button.title) {
      display: flex;
      align-items: center;
      justify-content: space-between;
      cursor: pointer;
    }

    &:deep(.content) {
      padding-left: $padding;
    }
  }
</style>
