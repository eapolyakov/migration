import React from 'react';

export default function Preloader(){
    return <div>
        <div id="cssLoader3" className="preloder-wrap">
        <div className="loader">
            <div className="child-common child4"></div>
            <div className="child-common child3"></div>
            <div className="child-common child2"></div>
            <div className="child-common child1"></div>
        </div>
    </div>
        <div className="search-area">
            <span className="closs-btn">Close</span>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 col-md-offset-3">
                        <div className="search-form">
                            <form action="#">
                                <input type="text" name="search" placeholder="Search Here"/>
                                <button type="button" name="button" className="btn-style">Search</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

}