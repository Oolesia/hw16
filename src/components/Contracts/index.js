import React, { Component } from 'react';
import Contact from '../Contact'
import '../components.css';


class Contracts extends Component {
    state = {
        contacts :  [{
          firstName: "Барней",
          lastName: "Стинсовский",
          phone: "+380956319521",
          gender: "male"
      }, {
          firstName: "Робин",
          lastName: "Щербатская",
          phone: "+380931460123",
          gender: "female"
      }, {
          firstName: "Аномный",
          lastName: "Анонимус",
          phone: "+380666666666"
      }, {
          firstName: "Лилия",
          lastName: "Олдровна",
          phone: "+380504691254",
          gender: "female"
      }, {
          firstName: "Маршэн",
          lastName: "Эриксонян",
          phone: "+380739432123",
          gender: "male"
      }, {
          firstName: "Теодор",
          lastName: "Мотсбэс",
          phone: "+380956319521",
          gender: "male"
      }],
      search : ''
    }


    handleSearchChange = (e) =>{
        this.setState({ search :e.target.value });
    }
            

    render(){
        const data = this.state.contacts.filter((item) => {
            const searchValue = this.state.search.toLocaleLowerCase();
            return item.lastName.toLowerCase().includes(searchValue) || item.firstName.toLowerCase().includes(searchValue) || 
            item.phone.includes(searchValue)
        });

        return(
            <div>
                <input className='filter-inp' onChange={this.handleSearchChange} search={this.state.search}/>
                {data.length ? <Contact contactCards = {data}/> : <p>No results</p> }
            </div>
        );
    }
}
export default Contracts;