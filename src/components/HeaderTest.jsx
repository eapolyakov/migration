import React from 'react';

export default function HeaderTest(){
    return <nav className="navbar navbar-default" role="navigation">
        <div className="container-fluid">
            <div className="navbar-header">
                <button type="button" className="navbar-toggle" data-toggle="collapse"
                        data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
            </div>

            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li className="active">
                        <a href="#">Ссылка</a>
                    </li>
                    <li>
                        <a href="#">Ссылка</a>
                    </li>
                </ul>
                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Ссылка</a></li>
                </ul>
            </div>
        </div>
    </nav>

}