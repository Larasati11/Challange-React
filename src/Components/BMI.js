import React from 'react'

class Body extends React.Component{
    constructor(){
        super();
        this.state = {
            tinggi: null,
            berat: null,
            hitung: null,
            status: ""
        }
    }
    hitung = (e) => {
        e.preventDefault();
        const tinggi = parseInt(this.refs.tinggi.value)/100;
        const berat = parseInt(this.refs.berat.value);
        let hitung;
        let status

        hitung = berat / Math.pow(tinggi,2);
        console.log(hitung);

        if (hitung >= 30.0) {
            status = "Berat Badan Anda OBESITAS. Lakukan Olahraga Untuk Berat Badan Ideal"
        } else if (hitung >= 25.0) {
            status = "Anda Kelebihan Berat Badan. Jaga Pola Makan Agar Tidak Obesitas"
        } else if (hitung >= 18.5) {
            status = "Berat Badan Anda IDEAL. Tetap Jaga Pola Makan & Olahraga"
        } else {
            status = "Anda Kekurangan Berat Badan. Lebih Banyak Makan yaa..."
        }

        this.setState({
            tinggi, berat, hitung, status
        });

        
    }
    render(){
        return(
            <div className="container">
                <div class="alert alert-secondary" role="alert">
                    <h2>BODY MASs INDEX</h2>
                </div>
                
                <form onSubmit={this.hitung}>
                    <label>Masukkan Tinggi:</label>
                    <input type="number" ref="tinggi" className="form-control"></input>
                    <br/>
                    <label>Masukkan Berat:</label>
                    <input type="number" ref="berat" className="form-control"></input>
                    <br/>
                    <button className="form-control btn btn-info text-white" onClick={this.hitung}>Submit</button>                   
                </form>
                <div class="row">
            <div class="col-sm-12">
                <div class="card">
                <div class="card-body">
                <h5 class="card-title">Status</h5>
                <h2 class="card-text">{this.state.status}</h2>
             </div>
             </div>
             </div>
             </div>  
            </div>
        )
    }

}
export default Body;