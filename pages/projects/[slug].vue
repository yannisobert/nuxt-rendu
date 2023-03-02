<template>
  <div>
    <NuxtLink class="back-button" :to="'/'">Back</NuxtLink>
    <NuxtLink v-if="slugPrec" class="back-button" :to="'/projects/' + slugPrec">Projet précédent</NuxtLink>
    <NuxtLink v-if="slugSuiv" class="back-button" :to="'/projects/' + slugSuiv">Projet suivant</NuxtLink>
  </div>
  <div v-if="project" class="project-infos">
    <div class="div-title text-3xl">
      <h3>Projet : {{ project.data[0].text }}</h3>
    </div>
    <div class="project-image">
    <img class="project-image"  :src="project.data[0].image.url"/>
    </div>
    <div>
      <h3 class="text-2xl">Description :</h3>
      <p>{{ project.data[0].description }}</p>
    </div>
    <div>
      <h3>Link</h3>
      <NuxtLink :to="project.data[0].link"><img class="github-logo" src="https://ukfzcxzweuqqhcxprujs.supabase.co/storage/v1/object/public/strapi-uploads/github.svg-13166fab28d14f8b74d4adea6d834d12.svg?updated_at=2023-03-01T11:04:19.736Z" alt="">
      </NuxtLink>
    </div>
    <div>
      <h3>Type de projet :</h3>
      <p>{{ project.data[0].types }}</p>
    </div>
    <div>
      <h3>Technos :</h3>
      <p v-for="(project, index) in project.data[0].technos" :key="index">
        <img class="technos-logo" :src="project.logo.url" alt="">
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">

const { findOne } = useStrapi()
const route = useRoute()

const project = ref();
const slugPrec = ref();
const slugSuiv = ref();

onMounted(async () => {
  project.value = await findOne("projects", {filters: {slug: {$eq: route.params.slug}}, populate: 'deep'})
  const idProjectPrec = project.value.data[0].id - 1
  const idProjectSuiv = project.value.data[0].id + 1

  const projectPrec = await findOne('projects',  {filters: {id: {$eq: idProjectPrec}}, populate: 'deep'})
  const projectSuiv = await findOne('projects',  {filters: {id: {$eq: idProjectSuiv}}, populate: 'deep'})

  if (projectPrec.data[0]) {
    slugPrec.value = projectPrec.data[0].slug
  }
  if (projectSuiv.data[0]) {
    slugSuiv.value = projectSuiv.data[0].slug
  }
});



</script>