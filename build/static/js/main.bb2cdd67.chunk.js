(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{231:function(e,a,t){e.exports=t(474)},236:function(e,a,t){},474:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(141),l=t.n(c),i=(t(236),t(7)),o=t(8),m=t(10),s=t(9),u=t(11),p=t(478),d=t(480),h=t(476),E=t(243),f=t(477),b=t(5),g=Object(b.b)(null,function(e){return{companySignOut:function(){return e(function(e,a,t){(0,t.getFirebase)().auth().signOut().then(function(){e({type:"COMPANY_SIGNOUT_SUCCESS"})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(f.a,{to:"/company-dashboard"},"Dashboard")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/company-addcar"},"Add New Car")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/company-profile"},"Company Profile")),r.a.createElement("li",null,r.a.createElement("a",{href:"/",onClick:e.companySignOut},"Log Out")))}),y=function(e){return r.a.createElement("div",null,r.a.createElement("li",null,r.a.createElement(f.a,{to:"/"},r.a.createElement("img",{className:"searchIcon",src:"/img/search.png",alt:"Search"}))),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/company-signup"},"Company Sign Up")),r.a.createElement("li",null,r.a.createElement(f.a,{to:"/company-signin"},"Company Login")))},C=Object(b.b)(function(e){return{companyAuth:e.firebase.auth}})(function(e){var a=e.companyAuth.uid?r.a.createElement(g,null):r.a.createElement(y,null);return r.a.createElement("div",null,r.a.createElement("nav",{className:"nav-wrapper yellow darken-3"},r.a.createElement("div",{className:"container"},r.a.createElement(E.a,{to:"/",className:"brand-logo hide-on-med-and-down"},r.a.createElement("img",{src:"/img/logoHeader.png",alt:"CatchCar.com Navbar Logo"})),r.a.createElement("ul",{className:"right "},a))))}),N=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={pickupLocation:""},t.onPickupLocationChange=function(e){var a=e.target.value;t.setState(function(){return{pickupLocation:a}})},t.onSubmit=function(e){e.preventDefault(),t.props.onSubmit({pickupLocation:t.state.pickupLocation})},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"center"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"center"},r.a.createElement("img",{className:"circular_img",src:"/img/catchcar.png",alt:"CatchCar Main Logo"})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"pickupLocation"},"Pickup Place"),r.a.createElement("input",{type:"text",id:"pickupLocation",className:"text-white",onChange:this.onPickupLocationChange})),r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"Find cars")))}}]),a}(r.a.Component),v=function(e){return function(a,t){a({type:"SET_PICKUP_LOCATION_FILTER",pickupLocation:e})}},O=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"dashboard container frontpage"},r.a.createElement(N,{onSubmit:function(a){e.props.setPickupLocationFilter(a.pickupLocation),e.props.history.push("/searchresult")}}))}}]),a}(n.Component),k=Object(b.b)(null,function(e){return{setPickupLocationFilter:function(a){return e(v(a))}}})(O),j=t(35),A=t.n(j),P=function(e){var a=e.companyCar;return r.a.createElement("div",{className:"card_content"},r.a.createElement("div",{className:"card-content card_box grey-text text-darken-1"},r.a.createElement("div",null,r.a.createElement("img",{className:"car-img",src:a.carImageURL,alt:"Car"})),r.a.createElement("div",null,r.a.createElement("h4",null,a.carName),r.a.createElement("p",null,a.companyName),r.a.createElement("p",null,"Posted on ",A()(a.createdAt.toDate()).calendar()))))},S=function(e){var a=e.companyCars;return r.a.createElement("div",{className:"project-list section"},a&&a.map(function(e){return r.a.createElement(E.a,{to:"/companyCar/"+e.id,key:e.id},r.a.createElement(P,{companyCar:e}))}))},L=t(67),F=function(e){var a=e.booking;return r.a.createElement("div",{className:" bookingList"},r.a.createElement(L.Modal,{header:"Booking Information",trigger:r.a.createElement("p",null,r.a.createElement("span",null,a.customerName)," make a booking for ",r.a.createElement("span",null,a.bookingCarName))},r.a.createElement("p",null,"Customer Name: ",a.customerName),r.a.createElement("p",null,"Car requested: ",a.bookingCarName),r.a.createElement("p",null,"Pickup Date: ",a.customerPickupDate),r.a.createElement("p",null,"Pickup Time: ",a.customerPickupTime),r.a.createElement("p",null,"Return Date: ",a.customerReturnDate),r.a.createElement("p",null,"Return Time: ",a.customerReturnTime),r.a.createElement("p",null,"Customer Contact No: ",a.customerContact),r.a.createElement("p",null,"Customer Email: ",a.customerEmail)))},R=function(e){var a=e.carBooked;return console.log(a),r.a.createElement("div",{className:"project-list section card_content notification"},r.a.createElement("h5",null,"Notifications"),a&&a.map(function(e){return r.a.createElement(F,{booking:e,key:e.id})}))},D=t(22),w=t(16),_=t(479),x=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.carBooked,t=e.companyCars;return e.companyAuth.uid?(console.log(t),r.a.createElement("div",{className:"dashboard container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 m8"},r.a.createElement(S,{companyCars:t})),r.a.createElement("div",{className:"col s12 m3 offset-m1 "},r.a.createElement(R,{carBooked:a}))))):r.a.createElement(_.a,{to:"/company-signin"})}}]),a}(n.Component),I=Object(w.d)(Object(b.b)(function(e){return{companyCars:e.firestore.ordered.companyCars,carBooked:e.firestore.ordered.carBooked,companyAuth:e.firebase.auth}}),Object(D.firestoreConnect)(function(e){return[{collection:"companyCars",where:[["companyID","==",e.companyAuth.uid]]},{collection:"carBooked",where:[["bookingCompanyEmail","==",e.companyAuth.email]]}]}))(x),T=Object(b.b)(function(e){return{companyAuth:e.firebase.auth,companyProfile:e.firebase.profile}})(function(e){var a=e.companyAuth,t=e.companyProfile;return a.uid?r.a.createElement("div",{className:"container profile center"},r.a.createElement("h5",null,"Company Profile"),r.a.createElement("div",null,r.a.createElement("p",{className:"font-bold"},"Company Name: "),r.a.createElement("p",null,t.companyName)),r.a.createElement("div",null,r.a.createElement("p",{className:"font-bold"},"Headquarters Location: "),r.a.createElement("p",null,t.headquartersLocation)),r.a.createElement("div",null,r.a.createElement("p",{className:"font-bold"},"Business License No: "),r.a.createElement("p",null,t.businessLicenseNo)),r.a.createElement("div",null,r.a.createElement("p",{className:"font-bold"},"Telephone Number: "),r.a.createElement("p",null,t.telephoneNumber))):r.a.createElement(_.a,{to:"/company-signin"})}),U=Object(w.d)(Object(b.b)(function(e,a){var t=a.match.params.id,n=e.firestore.data.companyCars;return{companyCar:n?n[t]:null,companyAuth:e.firebase.auth}}),Object(D.firestoreConnect)([{collection:"companyCars"}]))(function(e){var a=e.companyCar;return e.companyAuth.uid?a?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content"},r.a.createElement("img",{className:"car-img",src:a.carImageURL,alt:"Car"}),r.a.createElement("span",{className:"card-title"},a.carName),r.a.createElement("p",null,"Number of Seats: ",a.carSeater),r.a.createElement("p",null,"Transmission   : ",a.carTransmission),r.a.createElement("p",null,"Other features : ",a.carOtherFeatures)),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"By ",a.companyName),r.a.createElement("div",null,"Posted on ",A()(a.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Company Cars. . .")):r.a.createElement(_.a,{to:"/company-signin"})}),M=t(29),B=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:""},t.handleChange=function(e){t.setState(Object(M.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.companySignIn(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.companyAuthError;return e.companyAuth.uid?r.a.createElement(_.a,{to:"/company-dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign In"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"Login"),r.a.createElement("div",{className:"red-text center"},a?r.a.createElement("p",null,a):null))))}}]),a}(n.Component),z=Object(b.b)(function(e){return{companyAuthError:e.companyAuth.companyAuthError,companyAuth:e.firebase.auth}},function(e){return{companySignIn:function(a){return e((t=a,function(e,a,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(t.email,t.password).then(function(){e({type:"COMPANY_LOGIN_SUCCESS"})}).catch(function(a){e({type:"COMPANY_LOGIN_ERROR",err:a})})}));var t}}})(B),Y=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={email:"",password:"",companyName:"",headquartersLocation:"",telephoneNumber:"",businessLicenseNo:""},t.handleChange=function(e){t.setState(Object(M.a)({},e.target.id,e.target.value))},t.handleSubmit=function(e){e.preventDefault(),t.props.companySignUp(t.state)},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props,a=e.companyAuth,t=e.companyAuthError;return a.uid?r.a.createElement(_.a,{to:"/company-dashboard"}):r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Sign Up"),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("input",{type:"email",id:"email",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("input",{type:"password",id:"password",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"companyName"},"Company Name"),r.a.createElement("input",{type:"text",id:"companyName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"headquartersLocation"},"Headquarters Location City (e.g Gelugor)"),r.a.createElement("input",{type:"text",id:"headquartersLocation",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"telephoneNumber"},"Telephone Number"),r.a.createElement("input",{type:"text",id:"telephoneNumber",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"businessLicenseNo"},"Business License No"),r.a.createElement("input",{type:"text",id:"businessLicenseNo",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"Signup"),r.a.createElement("div",{className:"red-text center"},t?r.a.createElement("p",null,t):null))))}}]),a}(n.Component),q=Object(b.b)(function(e){return{companyAuth:e.firebase.auth,companyAuthError:e.companyAuth.companyAuthError}},function(e){return{companySignUp:function(a){return e(function(e){return function(a,t,n){var r=n.getFirebase,c=n.getFirestore,l=r(),i=c();l.auth().createUserWithEmailAndPassword(e.email,e.password).then(function(a){return i.collection("companies").doc(a.user.uid).set({companyName:e.companyName,headquartersLocation:e.headquartersLocation,telephoneNumber:e.telephoneNumber,businessLicenseNo:e.businessLicenseNo})}).then(function(){a({type:"COMPANY_SIGNUP_SUCCESS"})}).catch(function(e){a({type:"COMPANY_SIGNUP_ERROR",err:e})})}}(a))}}})(Y),G=t(68),K=t.n(G);t(434),t(438),t(475);K.a.initializeApp({apiKey:"AIzaSyD_5JION_g1WEWavcZC-5mzQ7nAt1qbKxk",authDomain:"catchcarv4.firebaseapp.com",databaseURL:"https://catchcarv4.firebaseio.com",projectId:"catchcarv4",storageBucket:"catchcarv4.appspot.com",messagingSenderId:"327590431776"}),K.a.firestore().settings({timestampsInSnapshots:!0});var V=K.a.storage(),W=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(t=Object(m.a)(this,(e=Object(s.a)(a)).call.apply(e,[this].concat(r)))).state={carImage:null,carImageURL:"",carName:"",carSeater:"",carTransmission:"",carOtherFeatures:"",carPricePerDay:"",companyEmail:""},t.handleChange=function(e){t.setState(Object(M.a)({},e.target.id,e.target.value));var a=t.props.companyAuth.email;t.setState(function(){return{companyEmail:a}})},t.handleChangeImage=function(e){if(e.target.files[0]){var a=e.target.files[0],n=t.props.companyAuth;t.setState(function(){return{carImage:a}}),V.ref("carImages/".concat(n.uid,"/").concat(a.name)).put(a).on("state_changed",function(e){},function(e){console.log(e)},function(){V.ref("carImages/".concat(n.uid)).child(a.name).getDownloadURL().then(function(e){console.log(e),t.setState({carImageURL:e})}).then(function(){console.log("image upload successfully")})})}},t.handleSubmit=function(e){e.preventDefault(),t.props.addCompanyCar(t.state),t.props.history.push("/company-dashboard")},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return this.props.companyAuth.uid?r.a.createElement("div",{className:"container"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"white"},r.a.createElement("h5",{className:"grey-text text-darken-3"},"Add New Car"),r.a.createElement("div",{className:"file-field input-field"},r.a.createElement("div",{className:"btn orange lighten-1 z-depth-0"},r.a.createElement("span",null,"Upload Car Image"),r.a.createElement("input",{type:"file",id:"carImage",accept:"image/*",onChange:this.handleChangeImage})),r.a.createElement("div",{className:"file-path-wrapper"},r.a.createElement("input",{className:"file-path validate",type:"text"}))),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"carName"},"Car Name"),r.a.createElement("input",{type:"text",id:"carName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"carSeater"},"No of Car Seats"),r.a.createElement("input",{type:"text",id:"carSeater",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"carTransmission"},"Car Transmission"),r.a.createElement("input",{type:"text",id:"carTransmission",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"carOtherFeatures"},"Other Features"),r.a.createElement("textarea",{id:"carOtherFeatures",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"carPricePerDay"},"Price per day"),r.a.createElement("textarea",{id:"carPricePerDay",className:"materialize-textarea",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0"},"Add Car")))):r.a.createElement(_.a,{to:"/company-signin"})}}]),a}(n.Component),H=Object(b.b)(function(e){return{companyAuth:e.firebase.auth}},function(e){return{addCompanyCar:function(a){return e(function(e){return function(a,t,n){n.getFirebase;var r=(0,n.getFirestore)(),c=t().firebase.profile,l=t().firebase.auth.uid;r.collection("companyCars").add({carName:e.carName,carSeater:e.carSeater,carTransmission:e.carTransmission,carOtherFeatures:e.carOtherFeatures,carPricePerDay:e.carPricePerDay,carImageURL:e.carImageURL,companyName:c.companyName,companyEmail:e.companyEmail,companyID:l,locationArea:c.headquartersLocation,createdAt:new Date}).then(function(){a({type:"ADD_COMPANY_CAR",companyCar:e})}).catch(function(e){a({type:"ADD_COMPANY_CAR_ERROR",err:e})})}}(a))}}})(W),J=function(e){var a=e.companyCar;return r.a.createElement("div",{className:"card_center"},r.a.createElement("div",{className:"card-content card_box grey-text text-darken-1"},r.a.createElement("span",{className:"inline"},r.a.createElement("img",{className:"car-img",src:a.carImageURL,alt:"Car"})),r.a.createElement("span",{className:"inline"},a.carPricePerDay?r.a.createElement("h4",null,"RM ",a.carPricePerDay,r.a.createElement("sub",null,"per day")):null,r.a.createElement("h5",null,a.carName),r.a.createElement("p",null,a.companyName),r.a.createElement("p",null,"Pickup Location: ",a.locationArea),r.a.createElement("p",null,"Posted on ",A()(a.createdAt.toDate()).calendar()))))},Q=function(e){var a=e.companyCars;return r.a.createElement("div",{className:"project-list section"},a&&a.map(function(e){return r.a.createElement(E.a,{to:"/searchresult/"+e.id,key:e.id},r.a.createElement(J,{companyCar:e}))}))},Z=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(m.a)(this,Object(s.a)(a).call(this,e))).onPickupLocationChange=function(e){var a=e.target.value;t.setState(function(){return{pickUpLocation:a}})},t.onSubmit=function(e){e.preventDefault(),t.props.setPickupLocationFilter(t.state.pickUpLocation)},t.state={pickUpLocation:e.pickup},t}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"carlistfilters"},r.a.createElement("form",{onSubmit:this.onSubmit},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12"},r.a.createElement("div",{className:"input-field inline"},r.a.createElement("input",{type:"text",id:"pickupLocation",className:"text-white",value:this.state.pickUpLocation,onChange:this.onPickupLocationChange,placeholder:"Pickup Place"})),r.a.createElement("button",{className:"btn orange lighten-1 z-depth-0 "},"Find cars")))))}}]),a}(r.a.Component),$=Object(b.b)(function(e){return{pickup:e.carFilters.pickupLocation}},function(e){return{setPickupLocationFilter:function(a){return e(v(a))}}})(Z),X=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.companyCars;return r.a.createElement("div",{className:"dashboard container"},r.a.createElement($,null),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 "},r.a.createElement(Q,{companyCars:e}))))}}]),a}(n.Component),ee=Object(w.d)(Object(b.b)(function(e){return{companyCars:e.firestore.ordered.companyCars,pickupLocation:e.carFilters.pickupLocation}}),Object(D.firestoreConnect)(function(e){return[{collection:"companyCars",where:[["locationArea","==",e.pickupLocation]]}]}))(X),ae=t(30),te=function(e){function a(){var e;return Object(i.a)(this,a),(e=Object(m.a)(this,Object(s.a)(a).call(this))).handleChange=function(a){e.setState(Object(M.a)({},a.target.id,a.target.value));var t=e.props.companyCar,n=t.companyEmail,r=t.carName;e.setState(function(){return{bookingCompanyEmail:n}}),e.setState(function(){return{bookingCarName:r}})},e.handleSubmit=function(a){a.preventDefault(),e.props.carBooking(e.state),e.props.history.push("/")},e.state={customerName:"",customerContact:"",customerEmail:"",customerPickupDate:"",customerPickupTime:"",customerReturnDate:"",customerReturnTime:"",paymentMethod:"",bookingCompanyEmail:"",bookingCarName:"",customerNameOnCard:"",customerCreditCardNum:"",customerCardExpiration:"",customerCardCVV:""},e}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){var e=this.props.companyCar;return e?r.a.createElement("div",{className:"container section project-details"},r.a.createElement("div",{className:"card z-depth-0"},r.a.createElement("div",{className:"card-content center"},r.a.createElement("img",{className:"car-img",src:e.carImageURL,alt:"Car"}),e.carPricePerDay?r.a.createElement("h4",null,"RM ",e.carPricePerDay,r.a.createElement("sub",null,"per day")):null,r.a.createElement("span",{className:"card-title"},e.carName),r.a.createElement("p",null,"Location: ",e.locationArea),r.a.createElement("p",null,"Number of Seats: ",e.carSeater),r.a.createElement("p",null,"Transmission   : ",e.carTransmission),r.a.createElement("p",null,"Other features : ",e.carOtherFeatures),r.a.createElement(L.Modal,{header:"Booking Information",trigger:r.a.createElement(L.Button,null,"BOOK NOW !")},r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerName"},"Your Name"),r.a.createElement("input",{type:"text",id:"customerName",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerContact"},"Contact No"),r.a.createElement("input",{type:"tel",id:"customerContact",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerEmail"},"Email"),r.a.createElement("input",{type:"email",id:"customerEmail",onChange:this.handleChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"customerPickupDate"},"Pickup Date"),r.a.createElement("input",{type:"date",id:"customerPickupDate",onChange:this.handleChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"customerPickupTime"},"Pickup Time"),r.a.createElement("input",{type:"time",id:"customerPickupTime",onChange:this.handleChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"customerReturnDate"},"Return Date"),r.a.createElement("input",{type:"date",id:"customerReturnDate",onChange:this.handleChange})),r.a.createElement("div",{className:""},r.a.createElement("label",{htmlFor:"customerReturnTime"},"Return Time"),r.a.createElement("input",{type:"time",id:"customerReturnTime",onChange:this.handleChange})),r.a.createElement("h5",null," Payment "),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"paymentMethod",name:"paymentMethod",value:"CreditCard",onChange:this.handleChange,defaultChecked:!0}),r.a.createElement("span",null,"Credit Card"))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"paymentMethod",name:"paymentMethod",value:"DebitCard",onChange:this.handleChange}),r.a.createElement("span",null,"Debit Card"))),r.a.createElement("p",null,r.a.createElement("label",null,r.a.createElement("input",{type:"radio",id:"paymentMethod",name:"paymentMethod",value:"PayPal",onChange:this.handleChange}),r.a.createElement("span",null,"Paypal"))),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerNameOnCard"},"Name On Card"),r.a.createElement("input",{type:"text",id:"customerNameOnCard",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerCreditCardNum"},"Credit card number"),r.a.createElement("input",{type:"text",id:"customerCreditCardNum",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerCardExpiration"},"Expiration"),r.a.createElement("input",{type:"text",id:"customerCardExpiration",onChange:this.handleChange})),r.a.createElement("div",{className:"input-field"},r.a.createElement("label",{htmlFor:"customerCardCVV"},"CVV"),r.a.createElement("input",{type:"text",id:"customerCardCVV",onChange:this.handleChange})),r.a.createElement("button",{href:"#",className:"btn orange lighten-1 z-depth-0"},"Submit")))),r.a.createElement("div",{className:"card-action grey lighten-4 grey-text"},r.a.createElement("div",null,"By ",e.companyName),r.a.createElement("div",null,"Posted on ",A()(e.createdAt.toDate()).calendar())))):r.a.createElement("div",{className:"container center"},r.a.createElement("p",null,"Loading Company Car Details. . ."))}}]),a}(n.Component),ne=Object(w.d)(Object(b.b)(function(e,a){var t=a.match.params.id,n=e.firestore.data.companyCars;return{companyCar:n?n[t]:null}},function(e){return{carBooking:function(a){return e((t=a,function(e,a,n){n.getFirebase,(0,n.getFirestore)().collection("carBooked").add(Object(ae.a)({},t)).then(function(){e({type:"ADD_BOOK_CAR",bookCar:t})}).catch(function(a){e({type:"ADD_BOOK_CAR_ERROR",err:a})})}));var t}}}),Object(D.firestoreConnect)([{collection:"companyCars"}]))(te),re=function(e){function a(){return Object(i.a)(this,a),Object(m.a)(this,Object(s.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(o.a)(a,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement(d.a,null,r.a.createElement(h.a,{exact:!0,path:"/",component:k}),r.a.createElement(h.a,{path:"/companyCar/:id",component:U}),r.a.createElement(h.a,{exact:!0,path:"/searchresult/:id",component:ne}),r.a.createElement(h.a,{path:"/company-dashboard",component:I}),r.a.createElement(h.a,{path:"/company-signin",component:z}),r.a.createElement(h.a,{path:"/company-signup",component:q}),r.a.createElement(h.a,{path:"/company-profile",component:T}),r.a.createElement(h.a,{path:"/company-addcar",component:H}),r.a.createElement(h.a,{path:"/searchresult",component:ee}))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ce={companyAuthError:null},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"COMPANY_LOGIN_ERROR":return Object(ae.a)({},e,{companyAuthError:"Login Failed"});case"COMPANY_LOGIN_SUCCESS":case"COMPANY_SIGNOUT_SUCCESS":return Object(ae.a)({},e,{companyAuthError:null});case"COMPANY_SIGNUP_ERROR":return Object(ae.a)({},e,{companyAuthError:a.err.message});default:return e}},ie={companyCars:[{id:"1",carName:"Proton Saga",carSeater:"4",carTransmission:"Manual",carOtherFeatures:"Free half petrol tank"},{id:"2",carName:"Honda City",carSeater:"4",carTransmission:"Auto",carOtherFeatures:"Eco-Car, petrol save"},{id:"3",carName:"Perodua Kancil",carSeater:"4",carTransmission:"Manual",carOtherFeatures:"Small, but fast LOL"}]},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ie;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_COMPANY_CAR":case"ADD_COMPANY_CAR_ERROR":default:return e}},me=t(69),se={pickupLocation:""},ue=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:se,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_PICKUP_LOCATION_FILTER":return Object(ae.a)({},e,{pickupLocation:a.pickupLocation});default:return e}},pe={},de=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:pe;switch((arguments.length>1?arguments[1]:void 0).type){case"ADD_BOOK_CAR":case"ADD_BOOK_CAR_ERROR":default:return e}},he=Object(w.c)({carFilters:ue,companyAuth:le,companyCar:oe,firestore:me.firestoreReducer,firebase:D.firebaseReducer,bookCar:de}),Ee=t(230),fe=Object(w.e)(he,Object(w.d)(Object(w.a)(Ee.a.withExtraArgument({getFirebase:D.getFirebase,getFirestore:me.getFirestore})),Object(me.reduxFirestore)(K.a),Object(D.reactReduxFirebase)(K.a,{useFirestoreForProfile:!0,userProfile:"companies",attachAuthIsReady:!0})));fe.firebaseAuthIsReady.then(function(){l.a.render(r.a.createElement(b.a,{store:fe},r.a.createElement(re,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[231,2,1]]]);
//# sourceMappingURL=main.bb2cdd67.chunk.js.map