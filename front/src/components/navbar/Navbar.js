import React, { Component } from "react";
//import {connect} from 'react-redux'
//import {withRouter}from 'react-router-dom'
//import {putSearchKeyWord} from '../../action/actionCreator'
import { MDBInput,MDBBadge,MDBNavbar, MDBNavbarBrand, MDBNavbarNav, MDBNavItem, MDBNavLink, MDBNavbarToggler, MDBCollapse, MDBDropdown,
MDBDropdownToggle, MDBDropdownMenu, MDBDropdownItem, MDBIcon ,MDBFormInline, MDBBtn } from "mdbreact";
//import logo from'../../image'
class Navbar extends Component {
constructor(props){
  super(props)
  this.state = {
    searchInput:"",
    collapseID: "",
    categorieEntered: false,
    accountEntered: false
  }
  
}
handleChange=(e)=>{
  this.setState({
    searchInput:e.target.value
  })
}
put=()=>{
  this.props.putSerchKeyWord(this.state.searchInput)
}
toggleCollapse = collapseID => () =>
  this.setState(prevState => ({
  collapseID: prevState.collapseID !== collapseID ? collapseID : ""
}));
profileLeave=()=>{
  console.log('mouse left')
  this.setState({
    accountEntered:false
  })
}
categorieEnter=()=>{
  console.log('mouse entered')
  this.setState({
    categorieEntered:true
  })
}
profileEnter=()=>{
  console.log('mouse entered')
  this.setState({
    accountEntered:true
  })
}/*
handelSubmit=(e)=>{
  e.preventDefault()
  console.log('submit')
  this.put()
  console.log('props after put: ')
  console.log(this.props)
  console.log(this.props.searchKeyWord)
  this.props.history.push("/prodName/"+this.props.searchKeyWord)
  
}*/

render() { 
 /* console.log('props : ')
  console.log(this.props)
  */return (
    
      <MDBNavbar fixed="top" transparent  scrolling  expand="md" style={{background: 'white' }}>
        <MDBNavbarBrand>
          <img style={{width:'135px',height:'45px'}} src="https://scontent.ftun10-1.fna.fbcdn.net/v/t1.15752-9/78489708_426686081359534_7129282400076431360_n.png?_nc_cat=107&_nc_ohc=P1dLbjOYnpcAQmZAuf7Fyfh6hehyrL2cSPkvCQKXA2eZ1IvPVZ2Hq9GQw&_nc_ht=scontent.ftun10-1.fna&oh=eed520480860e3409a5a6997c05d0e6c&oe=5E7B7DD8"/>
        </MDBNavbarBrand>
        <MDBNavbarToggler onClick={this.toggleCollapse("navbarCollapse3")} />    
        <MDBCollapse id="navbarCollapse3" isOpen={this.state.collapseID} navbar>
        
          <MDBNavbarNav left='true'>
            <MDBNavItem >
              <MDBNavLink exact activeClassName='dropdownShadow' style={{fontWeight:'bold',color:'black'}/*this.activeStyle*/} to="/">Accueil</MDBNavLink>
            </MDBNavItem>
            <MDBNavItem>
              <MDBNavLink exact style={{fontWeight:'bold',color:'black'}} to="/coatching">Coatching</MDBNavLink>
            </MDBNavItem>
   
          </MDBNavbarNav>
          <MDBNavbarNav right="true">
          <MDBNavItem >
          <MDBNavLink to="/sign_up">
            <MDBIcon icon="user-plus"  />
           </MDBNavLink>
            </MDBNavItem>
            <MDBNavItem >
            <MDBNavLink to="/sign_in">
            <MDBIcon icon="sign-in-alt" to="/sign_in"/>
            </MDBNavLink>
            </MDBNavItem>
            </MDBNavbarNav>
            </MDBCollapse>
            </MDBNavbar>
           
         
    
    
    );
  }
}
/*const mapStateToProps=(state)=>{
  console.log('searchKeyWord : ')
  console.log(state.keyWord)
    return{
     NumberOfItemsInTheShopCart:state.shopCart.itemsInTheShopCart.length,
     searchKeyWord:state.keyWord 
    }}
    
const mapDispatchToProps=(dispatch)=>({
  putSerchKeyWord:(s)=>dispatch(putSearchKeyWord(s))
})*/
export default Navbar 