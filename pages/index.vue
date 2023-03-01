<template>
  <!--<div v-if="projects">
    <div v-for="(project, index) in projects.data" :key="index">
      <NuxtLink :to="'/projects/' + project.slug">
        {{ project.slug }}
      </NuxtLink>
      <img class="project-image"  :src="project.image.url"/>
    </div>
  </div>
  <hr>-->
  <div v-if="projectsPerso">
    <h2>Projets perso</h2>
    <div class="grid-container">
      <div v-for="(projectPerso, index) in projectsPerso.data" :key="index" class="grid-item">
        <NuxtLink :to="'/projects/' + projectPerso.slug">
          {{ projectPerso.slug }}
        </NuxtLink>
        <!--<img class="project-image"  :src="projectPro.image.url"/>-->
      </div>
    </div>
  </div>

  <hr>

  <div v-if="projectsPro">
    <h2>Projets Pro</h2>
    <div class="grid-container">
      <div v-for="(projectPro, index) in projectsPro.data" :key="index" class="grid-item">
        <NuxtLink :to="'/projects/' + projectPro.slug">
          {{ projectPro.slug }}
        </NuxtLink>
        <!--<img class="project-image"  :src="projectPro.image.url"/>-->
      </div>
    </div>
  </div>

  <hr>

  <div v-if="projectsIIM">
    <h2>Projets IIM</h2>
    <div v-for="(projectIIM, index) in projectsIIM.data" :key="index">
      <NuxtLink :to="'/projects/' + projectIIM.slug">
        {{ projectIIM.slug }}
      </NuxtLink>
      <img class="project-image"  :src="projectIIM.image.url"/>
    </div>
  </div>
</template>

<script setup>
const { find } = useStrapi();
const projects = ref();
const projectsPerso = ref();
const projectsPro = ref();
const projectsIIM = ref();

onMounted(async () => {
  projects.value = await find('projects', { populate: 'deep' });
  projectsPerso.value = await find('projects',  {filters: {types: {$eq: "perso"}}, populate: 'deep'});
  projectsPro.value = await find('projects',  {filters: {types: {$eq: "pro"}}, populate: 'deep'});
  projectsIIM.value = await find('projects',  {filters: {types: {$eq: "iim"}}, populate: 'deep'});
  //console.log(projects.value.data)
});


</script>