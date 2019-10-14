import React, { Fragment } from 'react';


function FiltroB() {

    return (

        <Fragment>

            <div className="text- py-5 px-4">
                <div>
                    <div className="container">
                        <div className="row">
                            <div className="col-3 center-clock">
                                <div className="input-group place" data-provide="place">
                                    <input type="text" placeholder="Lugar" className="form-control" />
                                    <div className="input-group-addon">
                                        <span
                                            className="form-control-icon search-destination-input_icon"
                                        ></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group date" data-provide="datepicker">
                                    <input type="text" placeholder="Entrada" className="form-control" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-3">
                                <div className="input-group date" data-provide="datepicker">
                                    <input type="text" placeholder="Salida" className="form-control" />
                                    <div className="input-group-addon">
                                        <span className="glyphicon glyphicon-th"></span>
                                    </div>
                                </div>
                            </div>
                            <div className="search_button-container">
                                <button type="submit" className="searchform_button search_button btn btn-primary">Buscar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>

    )


}

export default FiltroB;