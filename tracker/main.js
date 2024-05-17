const { createApp } = Vue;

createApp({
  data() {
    return {
      title: "",
      time: "",
      courses: []
    };
  },
  computed: {
    totalTime() {
      return this.courses.reduce((total, course) => total + Number(course.time), 0);
    }
  },
  methods: {
    addCourse() {
      if (this.title && this.time) {
        this.courses.push({ title: this.title, time: this.time });
        this.title = "";
        this.time = "";
      }
    }
  }
}).mount("#app");
