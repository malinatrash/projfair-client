<template>
  <BaseButton
    case="uppercase"
    variant="outlined"
    @click="modalsStore.openEvaluateStudentModal(props.id, props.name)"
  >
    Оценить
  </BaseButton>
</template>

<script lang="ts" setup>
  import { useEvaluationModal } from '@/stores/modals/useEvaluationStudentModalStore';
  import BaseButton from '../ui/BaseButton.vue';

  type Props = { id: number; name: string };

  const props = defineProps<Props>();
  const modalsStore = useEvaluationModal();
</script>
