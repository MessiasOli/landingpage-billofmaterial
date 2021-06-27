export var ComponentMixin = {
  props: ["callForm"],
  data() {
    return {};
  },
  methods: {
    openFormRegister(props) {
      this.$emit("callForm", props);
    },
  },
};
