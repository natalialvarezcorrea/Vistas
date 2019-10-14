import React, { Fragment } from 'react';


function FiltrosMas() {


    return (
        <Fragment>

            <section className="application_filterBar">
                <div className="FilterBar" data-wdio="FilterBar">
                    <div className="container">
                        <div className="row">
                            <div className="col-3"><div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Precio
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-3"><div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Tipo
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>
                                </div>
                            </div>
                            </div>
                            <div className="col-3"><div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Area
                        </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Action</button>

                                </div>
                            </div>
                            </div>
                            <div className="col-3"><button type="button" className="control btn btn-filter" data-filter="all">Mas filtros</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </Fragment>

    )
}

export default FiltrosMas;