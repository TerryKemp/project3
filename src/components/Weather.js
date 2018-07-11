import React from 'react';

class Weather extends React.Component{
    render(){
        return (
            <div> 
                {this.props.lat && this.props.lon && <p>Latitude: { this.props.lat }</p>}
                {this.props.lat && this.props.lon && <p>Longitude: { this.props.lon }</p>}
                {this.props.value && <p>UV Index: {this.props.value }</p>}
            </div>
        );
    }
};

export default Weather