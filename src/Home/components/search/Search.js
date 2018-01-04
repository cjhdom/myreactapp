import React from 'react';

const Search = () => {
    return (
        <form className="search ng-pristine ng-valid ng-scope" name="main_search">
            <fieldset>
                <input type="search" size="60" name="search_bar" g-places-autocomplete="" options="autocompleteOptions"
                       force-selection="true" ng-model="place" placeholder="지역명, 지하철역명, 대학교명을 입력하세요."
                       ng-keydown="doEnterkey($event)" kr-input=""
                       className="ng-pristine ng-untouched ng-valid ng-isolate-scope ng-empty" />
                    <input type="button" name="search_click" value="검색"
                           ng-click="doMoveKosiwonSearch(place)" />
            </fieldset>
            <div className="huesik">
                <a ng-click="moveView('5a24fc784d07bbff4160aff7', '휴식 사가정 본점')" target="_blank">
                </a>
            </div>
        </form>)
};

export default Search;