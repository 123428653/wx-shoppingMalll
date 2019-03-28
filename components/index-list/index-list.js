Component({
  options: {
    addGlobalClass: true,
  },
  properties: {
    data: {
      type: Array,
      value: [],
      observer: function(newVal, oldVal) {
        // console.log(newVal)
        // console.log(oldVal)
      }
    }
  },
  methods: {
    _created() {
      // console.log('list-component：被创建了！')
    }
  },
  lifetimes: {
    created() {
      // this._created()
    }
  }
})
