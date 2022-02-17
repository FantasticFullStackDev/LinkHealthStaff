import React from 'react';
import { connect } from 'react-redux';
import { history } from '../../../store';
import mini_logo from '../../assets/images/mini-logo.svg';
import letter_logo from '../../assets/images/letter-logo.svg';

const mapStateToProps = state => {
  return {
    type: state.auth.type
  }};

const mapDispatchToProps = dispatch => ({
});

class Navigation extends React.Component {
    constructor(props){
        super(props);
        this.state = {
          color: [ false, false, false, false, false ]
        }
    }

    navTo = (num) => {
      var color = this.state.color;
      for (var i = 0; i < color.length; i++){
        if(num === i){
          color[i] = true;
          //--------------- nav to specific link
        } else {
          color[i] = false;
        }
      }
      this.setState({color: color});
      const links = ['/others', '/others', '/others', '/others', '/others'];
      history.push('/main/' + this.props.type + links[num]);
    }
   
   render() {
    return (
        <div className="theme2_side_nav">
            <div className="theme2_logo_container">
              <img src={mini_logo} alt="mini-logo.png" width="40px"/>
              <img src={letter_logo} alt="letter-logo.png" className="theme2_letter_logo"/>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(0)} style={{color: this.state.color[0]?"#009CDE":"#333333"}}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill={this.state.color[0]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                  <path stroke="white" strokeWidth="0.8" d="M27.6667 1H4.33333C2.5 1 1 2.5 1 4.33333V27.6667C1 29.5 2.5 31 4.33333 31H27.6667C29.5 31 31 29.5 31 27.6667V4.33333C31 2.5 29.5 1 27.6667 1ZM4.33333 27.6667V4.33333H14.3333V27.6667H4.33333ZM27.6667 27.6667H17.6667V16H27.6667V27.6667ZM27.6667 12.6667H17.6667V4.33333H27.6667V12.6667Z"/>
              </svg>
              <b className="theme2_nav_text" > Dashboard </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(1)} style={{color: this.state.color[1]?"#009CDE":"#333333"}}>
              <svg width="24" height="28" viewBox="0 0 32 36" fill={this.state.color[1]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path stroke="white" strokeWidth="0.8" d="M9.57143 17.3393V14.6607C9.57143 14.2169 9.93123 13.8571 10.375 13.8571H13.0536C13.4973 13.8571 13.8571 14.2169 13.8571 14.6607V17.3393C13.8571 17.7831 13.4973 18.1429 13.0536 18.1429H10.375C9.93123 18.1429 9.57143 17.7831 9.57143 17.3393ZM18.9464 18.1429H21.625C22.0688 18.1429 22.4286 17.7831 22.4286 17.3393V14.6607C22.4286 14.2169 22.0688 13.8571 21.625 13.8571H18.9464C18.5027 13.8571 18.1429 14.2169 18.1429 14.6607V17.3393C18.1429 17.7831 18.5027 18.1429 18.9464 18.1429ZM13.8571 23.7679V21.0893C13.8571 20.6455 13.4973 20.2857 13.0536 20.2857H10.375C9.93123 20.2857 9.57143 20.6455 9.57143 21.0893V23.7679C9.57143 24.2116 9.93123 24.5714 10.375 24.5714H13.0536C13.4973 24.5714 13.8571 24.2116 13.8571 23.7679ZM18.9464 24.5714H21.625C22.0688 24.5714 22.4286 24.2116 22.4286 23.7679V21.0893C22.4286 20.6455 22.0688 20.2857 21.625 20.2857H18.9464C18.5027 20.2857 18.1429 20.6455 18.1429 21.0893V23.7679C18.1429 24.2116 18.5027 24.5714 18.9464 24.5714ZM31 32.875V35.2857H1V32.875C1 32.4312 1.3598 32.0714 1.80357 32.0714H3.10938V6.69431C3.10938 5.91638 3.82891 5.28571 4.71652 5.28571H10.6429V2.60714C10.6429 1.71953 11.3624 1 12.25 1H19.75C20.6376 1 21.3571 1.71953 21.3571 2.60714V5.28571H27.2835C28.1711 5.28571 28.8906 5.91638 28.8906 6.69431V32.0714H30.1964C30.6402 32.0714 31 32.4312 31 32.875ZM6.32366 32.0045H13.8571V27.5179C13.8571 27.0741 14.2169 26.7143 14.6607 26.7143H17.3393C17.7831 26.7143 18.1429 27.0741 18.1429 27.5179V32.0045H25.6763V8.5H21.3571V10.1071C21.3571 10.9948 20.6376 11.7143 19.75 11.7143H12.25C11.3624 11.7143 10.6429 10.9948 10.6429 10.1071V8.5H6.32366V32.0045ZM18.8125 5.28571H17.0714V3.54464C17.0714 3.43808 17.0291 3.33589 16.9537 3.26054C16.8784 3.18519 16.7762 3.14286 16.6696 3.14286H15.3304C15.2238 3.14286 15.1216 3.18519 15.0463 3.26054C14.9709 3.33589 14.9286 3.43808 14.9286 3.54464V5.28571H13.1875C13.0809 5.28571 12.9787 5.32805 12.9034 5.4034C12.828 5.47874 12.7857 5.58094 12.7857 5.6875V7.02679C12.7857 7.13335 12.828 7.23554 12.9034 7.31089C12.9787 7.38624 13.0809 7.42857 13.1875 7.42857H14.9286V9.16964C14.9286 9.2762 14.9709 9.3784 15.0463 9.45375C15.1216 9.5291 15.2238 9.57143 15.3304 9.57143H16.6696C16.7762 9.57143 16.8784 9.5291 16.9537 9.45375C17.0291 9.3784 17.0714 9.2762 17.0714 9.16964V7.42857H18.8125C18.9191 7.42857 19.0213 7.38624 19.0966 7.31089C19.172 7.23554 19.2143 7.13335 19.2143 7.02679V5.6875C19.2143 5.58094 19.172 5.47874 19.0966 5.4034C19.0213 5.32805 18.9191 5.28571 18.8125 5.28571Z"/>
              </svg>
              <b className="theme2_nav_text"> Browse Hospitals </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(2)} style={{color: this.state.color[2]?"#009CDE":"#333333"}}>
              <svg width="24" height="29" viewBox="0 0 32 38"  fill={this.state.color[2]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path stroke="white" strokeWidth="0.8" d="M7.234 1.28571L7 2.50521L5.5 10.9427V16.2857H5.641C5.84873 17.7356 6.35614 19.1263 7.1309 20.3692C7.90566 21.6122 8.93079 22.6802 10.141 23.5052C4.7905 25.8002 1 31.1102 1 37.2857H4C3.99757 35.4854 4.40088 33.7076 5.17994 32.0846C5.959 30.4615 7.0938 29.0349 8.5 27.9107V28.8947L8.9215 29.3642L14.9215 35.3642L16 36.3947L17.0785 35.3642L23.0785 29.3642L23.5 28.8947V27.9107C24.9062 29.0349 26.041 30.4615 26.8201 32.0846C27.5991 33.7076 28.0024 35.4854 28 37.2857H31C31 31.1102 27.2095 25.8017 21.859 23.5037C23.069 22.6789 24.0941 21.6111 24.8688 20.3684C25.6436 19.1257 26.1511 17.7353 26.359 16.2857H26.5V10.9412L25 2.50521L24.766 1.28571H7.234ZM9.766 4.28571H22.234L23.5 11.4572V13.2857H8.5V11.4572L9.766 4.28571ZM14.5 5.78571V7.28571H13V10.2857H14.5V11.7857H17.5V10.2857H19V7.28571H17.5V5.78571H14.5ZM8.641 16.2857H23.359C23.0126 17.9811 22.0908 19.5047 20.7496 20.5982C19.4084 21.6917 17.7304 22.2879 16 22.2857C14.2696 22.2879 12.5916 21.6917 11.2504 20.5982C9.90924 19.5047 8.98737 17.9811 8.641 16.2857ZM16 25.2857C17.5401 25.2776 19.0676 25.5643 20.5 26.1302V27.6302L16 32.1302L11.5 27.6302V26.1302C12.9324 25.5643 14.4599 25.2776 16 25.2857Z"/>
              </svg>
              <b className="theme2_nav_text"> My Jobs </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(3)} style={{color: this.state.color[3]?"#009CDE":"#333333"}}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill={this.state.color[3]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path d="M22 1.28571C22.7956 1.28571 23.5587 1.60178 24.1213 2.16439C24.6839 2.72699 25 3.49006 25 4.28571H4V21.0512C3.20435 21.0512 2.44129 20.7351 1.87868 20.1725C1.31607 19.6099 1 18.8469 1 18.0512V4.28571C1 3.49006 1.31607 2.72699 1.87868 2.16439C2.44129 1.60178 3.20435 1.28571 4 1.28571H22Z" stroke="white" strokeWidth="0.8"/>
                <path d="M19 31.2857L14.9995 27.0512H10C9.20435 27.0512 8.44129 26.7351 7.87868 26.1725C7.31607 25.6099 7 24.8469 7 24.0512V10.2857C7 9.49006 7.31607 8.72699 7.87868 8.16439C8.44129 7.60178 9.20435 7.28571 10 7.28571H28C28.7956 7.28571 29.5587 7.60178 30.1213 8.16439C30.6839 8.72699 31 9.49006 31 10.2857V24.0512C31 24.8469 30.6839 25.6099 30.1213 26.1725C29.5587 26.7351 28.7956 27.0512 28 27.0512H23.0005L19 31.2857ZM21.7075 24.0512H28V10.2857H10V24.0512H16.2925L19 26.9162L21.7075 24.0512Z" stroke="white" strokeWidth="0.8"/>
              </svg>
              <b className="theme2_nav_text"> Chat </b>
            </div>
            <div className="theme2_nav_item" onClick={() => this.navTo(4)} style={{color: this.state.color[4]?"#009CDE":"#333333"}}>
              <svg width="24" height="24" viewBox="0 0 32 32" fill={this.state.color[4]?"#009CDE":"#333333"} xmlns="http://www.w3.org/2000/svg">
                <path d="M17.5 10.2857C18.6935 10.2857 19.8381 10.7598 20.682 11.6037C21.5259 12.4476 22 13.5922 22 14.7857C22 15.1835 22.158 15.5651 22.4393 15.8464C22.7206 16.1277 23.1022 16.2857 23.5 16.2857C23.8978 16.2857 24.2794 16.1277 24.5607 15.8464C24.842 15.5651 25 15.1835 25 14.7857C25 12.7966 24.2098 10.8889 22.8033 9.4824C21.3968 8.07588 19.4891 7.28571 17.5 7.28571C17.1022 7.28571 16.7206 7.44374 16.4393 7.72505C16.158 8.00635 16 8.38788 16 8.78571C16 9.18353 16.158 9.56506 16.4393 9.84636C16.7206 10.1277 17.1022 10.2857 17.5 10.2857Z" stroke="white" strokeWidth="0.8"/>
                <path d="M17.5 4.28571C20.2848 4.28571 22.9555 5.39195 24.9246 7.36108C26.8937 9.33021 28 12.0009 28 14.7857C28 15.1835 28.158 15.5651 28.4393 15.8464C28.7206 16.1277 29.1022 16.2857 29.5 16.2857C29.8978 16.2857 30.2794 16.1277 30.5607 15.8464C30.842 15.5651 31 15.1835 31 14.7857C31 11.2053 29.5777 7.7715 27.0459 5.23976C24.5142 2.70802 21.0804 1.28571 17.5 1.28571C17.1022 1.28571 16.7206 1.44374 16.4393 1.72505C16.158 2.00635 16 2.38788 16 2.78571C16 3.18353 16.158 3.56506 16.4393 3.84637C16.7206 4.12767 17.1022 4.28571 17.5 4.28571ZM30.625 22.1507C30.5425 21.9099 30.4001 21.6941 30.2111 21.5235C30.0222 21.3529 29.793 21.2332 29.545 21.1757L20.545 19.1207C20.3007 19.0653 20.0464 19.072 19.8054 19.1401C19.5643 19.2082 19.3442 19.3356 19.165 19.5107C18.955 19.7057 18.94 19.7207 17.965 21.5807C14.7298 20.0899 12.1375 17.487 10.66 14.2457C12.565 13.2857 12.58 13.2857 12.775 13.0607C12.9501 12.8815 13.0775 12.6614 13.1456 12.4203C13.2137 12.1793 13.2204 11.925 13.165 11.6807L11.11 2.78571C11.0525 2.53775 10.9328 2.30851 10.7622 2.11957C10.5916 1.93063 10.3758 1.78821 10.135 1.70571C9.7847 1.58059 9.42297 1.49016 9.055 1.43571C8.67588 1.3478 8.289 1.29755 7.9 1.28571C6.07001 1.28571 4.31496 2.01267 3.02096 3.30667C1.72696 4.60067 1 6.35571 1 8.1857C1.00794 14.3098 3.44423 20.1807 7.7746 24.5111C12.105 28.8415 17.9759 31.2778 24.1 31.2857C25.0061 31.2857 25.9034 31.1072 26.7405 30.7605C27.5777 30.4137 28.3383 29.9055 28.979 29.2647C29.6198 28.624 30.128 27.8634 30.4748 27.0262C30.8215 26.1891 31 25.2918 31 24.3857C31.0005 24.0039 30.9704 23.6227 30.91 23.2457C30.847 22.8731 30.7516 22.5067 30.625 22.1507ZM24.1 28.2857C18.7704 28.2817 13.6602 26.1628 9.89154 22.3942C6.12292 18.6255 4.00397 13.5153 4 8.1857C4.00395 7.15258 4.41611 6.16289 5.14665 5.43235C5.87718 4.70182 6.86687 4.28966 7.9 4.28571H8.395L10 11.2457L9.19 11.6657C7.9 12.3407 6.88 12.8807 7.42 14.0507C8.29933 16.5401 9.72216 18.8023 11.5851 20.673C13.448 22.5438 15.7043 23.976 18.19 24.8657C19.45 25.3757 19.945 24.4307 20.62 23.1257L21.055 22.3007L28 23.8907V24.3857C27.996 25.4188 27.5839 26.4085 26.8533 27.1391C26.1228 27.8696 25.1331 28.2817 24.1 28.2857Z" stroke="white" strokeWidth="0.8"/>
              </svg>
              <b className="theme2_nav_text"> Calls </b>
            </div>
        </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);