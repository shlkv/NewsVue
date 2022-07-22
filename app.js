const App = {
  data() {
    return {
      toggler: false,
      togglerEdit: false,
      placeholderTitle: 'Title',
      placeholderBody: 'Description',
      placeholderAuthor: 'Author',
      inputValue: '',
      counter: 0,
      title: '',
      body: '',
      author: '',
      // notes: [], 
      news: [ {
        id: 0,
        title:'Кот занял первое место в Книге рекордов Гиннеса',
        body:'Японский кот Мотимару шотландской породы набрал на видеохостинге более 600 миллионов просмотров, за что удостоен награды и занесен в книгу рекордов Гиннеса. Это самый просматриваемый на YouTube представитель кошачьих.',
        author:'Sharon Ellis',
        date: new Date("09.12.2021").toDateString(),
        like:0
      },
      { 
        id: 1,
        title:'Кошка всю ночь ждала звонка от хозяина',
        body:'Каждый вечер хозяин созванивался со своими любимцами в 9 вечера и обсуждал новости дня. Однако в один вечер позвонить домой не удалось.Печальная реакция кошек попала на видео, которое быстро стало вирусным.Питомцы долго ждали звонка от хозяина. Одна из кошек так переживала за хозяина, что просидела в ожидании перед камерой всю ночь. Бедная кошка даже не знала, что с любимым хозяином все в порядке и он позвонит завтра',
        author:'Lydia Hall',
        date: new Date("09.13.2020").toDateString(),
        like:0
        },
      {
        id: 2,
        title:'Котенок дважды украл деньги из бара',
        body:'Воровство произошло в Анапе, в одном из баров. Кошку зовут Масяня и она принадлежит сотруднику бара.Известно, что у котенка было две попытки ограбления: первая закончилась тем, что Масяня выронила купюры изо рта. Вторая оказалась успешнее и обнаружилась только при недостаче кассы в баре.Котенок имеет пристрастие к купюрам и часто играет с ними. В баре стоит небольшой чемоданчик с купюрами, которые и могли стать причиной такой неожиданной любви кошки к деньгам.',
        author:'Brian Reed',
        date: new Date("07.24.2020").toDateString(),
        like:0
      },],
    }
  },
  
    methods:{
      changeToggler() {
        this.toggler = !this.toggler
      },
      changeTogglerEdit() {
        this.togglerEdit = !this.togglerEdit
      },
      formIsvalid() {
        let isValid = true
        console.log(this.news.title)
        if ((this.title.length === 0) || (this.body.length === 0) || (this.author.length === 0))
        {
          alert('введите все поля')
          isValid = false
        }
        return isValid
      },
      createNews() {
        if (this.formIsvalid()) {
          this.news.unshift({
            id : this.news.length,
            title : this.title,
            body : this.body,
            author : this.author,
            date : new Date().toDateString(),
            like:0
          })
          this.title = '',
          this.body = '',
          this.author = ''
        }
        
        console.log(this.news)
        this.inputValue = ''
      },
      inputChangeHandler (event) {
        this.inputValue = event.target.value
      },
      // addNewNote() {
      //   if (this.inputValue !== '') {
      //   this.news.push(this.inputValue)
      //   this.inputValue = ''
      //   }
      // },
      deleteNews(idx){
        this.news.splice(idx,1)
      },
      editNews(idx){
        this.title = this.news[idx].title 
        this.body = this.news[idx].body 
        this.author = this.news[idx].author 
        console.log(this.news[idx].title)
      },
      editEdit() {
        // this.title = this.news.title 
        console.log(this.title )
      }
     
      
    }
  
}

Vue.createApp(App).mount('#app')