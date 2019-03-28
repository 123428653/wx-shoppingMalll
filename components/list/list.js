Component({
  options: {
    addGlobalClass: true,
  },
  data: {
    myProperty: 'Test'
  },
  properties: {
    list: {
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
      this._created()
    }
  }
})
