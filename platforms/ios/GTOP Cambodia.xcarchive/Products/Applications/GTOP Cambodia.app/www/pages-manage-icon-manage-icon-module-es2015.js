(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-manage-icon-manage-icon-module"],{

/***/ "./node_modules/@ionic-native/crop/ngx/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ionic-native/crop/ngx/index.js ***!
  \******************************************************/
/*! exports provided: Crop */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Crop", function() { return Crop; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var Crop = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(Crop, _super);
    function Crop() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Crop.prototype.crop = function (pathToImage, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "crop", { "callbackOrder": "reverse" }, arguments); };
    Crop.pluginName = "Crop";
    Crop.plugin = "cordova-plugin-crop";
    Crop.pluginRef = "plugins";
    Crop.repo = "https://github.com/jeduan/cordova-plugin-crop";
    Crop.platforms = ["Android", "iOS"];
    Crop = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], Crop);
    return Crop;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2Nyb3Avbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sOEJBQXNDLE1BQU0sb0JBQW9CLENBQUM7O0lBb0M5Qyx3QkFBaUI7Ozs7SUFVekMsbUJBQUksYUFBQyxXQUFtQixFQUFFLE9BQXFCOzs7Ozs7SUFWcEMsSUFBSTtRQURoQixVQUFVLEVBQUU7T0FDQSxJQUFJO2VBckNqQjtFQXFDMEIsaUJBQWlCO1NBQTlCLElBQUkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBJb25pY05hdGl2ZVBsdWdpbiwgUGx1Z2luIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBDcm9wT3B0aW9ucyB7XG4gIHF1YWxpdHk/OiBudW1iZXI7XG4gIHRhcmdldEhlaWdodD86IG51bWJlcjtcbiAgdGFyZ2V0V2lkdGg/OiBudW1iZXI7XG59XG5cbi8qKlxuICogQG5hbWUgQ3JvcFxuICogQGRlc2NyaXB0aW9uIENyb3BzIGltYWdlc1xuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBDcm9wIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jcm9wL25neCc7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBjcm9wOiBDcm9wKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmNyb3AuY3JvcCgncGF0aC90by9pbWFnZS5qcGcnLCB7cXVhbGl0eTogNzV9KVxuICogICAudGhlbihcbiAqICAgICBuZXdJbWFnZSA9PiBjb25zb2xlLmxvZygnbmV3IGltYWdlIHBhdGggaXM6ICcgKyBuZXdJbWFnZSksXG4gKiAgICAgZXJyb3IgPT4gY29uc29sZS5lcnJvcignRXJyb3IgY3JvcHBpbmcgaW1hZ2UnLCBlcnJvcilcbiAqICAgKTtcbiAqIGBgYFxuICogQGludGVyZmFjZXNcbiAqIENyb3BPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnQ3JvcCcsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWNyb3AnLFxuICBwbHVnaW5SZWY6ICdwbHVnaW5zJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9qZWR1YW4vY29yZG92YS1wbHVnaW4tY3JvcCcsXG4gIHBsYXRmb3JtczogWydBbmRyb2lkJywgJ2lPUyddXG59KVxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIENyb3AgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBDcm9wcyBhbiBpbWFnZVxuICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFRvSW1hZ2VcbiAgICogQHBhcmFtIHtDcm9wT3B0aW9uc30gW29wdGlvbnNdXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPHN0cmluZz59IFJldHVybnMgYSBwcm9taXNlIHRoYXQgcmVzb2x2ZXMgd2l0aCB0aGUgbmV3IGltYWdlIHBhdGgsIG9yIHJlamVjdHMgaWYgZmFpbGVkIHRvIGNyb3AuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGNyb3AocGF0aFRvSW1hZ2U6IHN0cmluZywgb3B0aW9ucz86IENyb3BPcHRpb25zKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgICByZXR1cm47XG4gIH1cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@ionic-native/file-transfer/ngx/index.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ionic-native/file-transfer/ngx/index.js ***!
  \***************************************************************/
/*! exports provided: FileTransfer, FileTransferObject */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransfer", function() { return FileTransfer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FileTransferObject", function() { return FileTransferObject; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var FileTransfer = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(FileTransfer, _super);
    function FileTransfer() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /**
         * Error code rejected from upload with FileTransferError
         * Defined in FileTransferError.
         *      FILE_NOT_FOUND_ERR: 1   Return when file was not found
         *      INVALID_URL_ERR: 2,     Return when url was invalid
         *      CONNECTION_ERR: 3,      Return on connection error
         *      ABORT_ERR: 4,           Return on aborting
         *      NOT_MODIFIED_ERR: 5     Return on '304 Not Modified' HTTP response
         * @enum {number}
         */
        _this.FileTransferErrorCode = {
            FILE_NOT_FOUND_ERR: 1,
            INVALID_URL_ERR: 2,
            CONNECTION_ERR: 3,
            ABORT_ERR: 4,
            NOT_MODIFIED_ERR: 5
        };
        return _this;
    }
    /**
     * Creates a new FileTransfer object
     * @return {FileTransferObject}
     */
    FileTransfer.prototype.create = function () {
        return new FileTransferObject();
    };
    FileTransfer.pluginName = "FileTransfer";
    FileTransfer.plugin = "cordova-plugin-file-transfer";
    FileTransfer.pluginRef = "FileTransfer";
    FileTransfer.repo = "https://github.com/apache/cordova-plugin-file-transfer";
    FileTransfer.platforms = ["Amazon Fire OS", "Android", "Browser", "iOS", "Ubuntu", "Windows", "Windows Phone"];
    FileTransfer = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], FileTransfer);
    return FileTransfer;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

var FileTransferObject = /** @class */ (function () {
    function FileTransferObject() {
        if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["checkAvailability"])(FileTransfer.getPluginRef(), null, FileTransfer.getPluginName()) === true) {
            this._objectInstance = new (FileTransfer.getPlugin())();
        }
    }
    FileTransferObject.prototype.upload = function (fileUrl, url, options, trustAllHosts) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "upload", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.download = function (source, target, trustAllHosts, options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "download", { "successIndex": 2, "errorIndex": 3 }, arguments); };
    FileTransferObject.prototype.onProgress = function (listener) {
        var _this = this;
        return (function () {
            if (Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["instanceAvailability"])(_this) === true) {
                _this._objectInstance.onprogress = listener;
            }
        })();
    };
    FileTransferObject.prototype.abort = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordovaInstance"])(this, "abort", { "sync": true }, arguments); };
    FileTransferObject.plugin = "cordova-plugin-file-transfer";
    FileTransferObject.pluginName = "FileTransfer";
    FileTransferObject = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FileTransferObject);
    return FileTransferObject;
}());

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ZpbGUtdHJhbnNmZXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sNERBS0wsaUJBQWlCLEVBQ2xCLE1BQU0sb0JBQW9CLENBQUM7O0lBeUxNLGdDQUFpQjs7O1FBQ2pEOzs7Ozs7Ozs7V0FTRztRQUNILDJCQUFxQixHQUFHO1lBQ3RCLGtCQUFrQixFQUFFLENBQUM7WUFDckIsZUFBZSxFQUFFLENBQUM7WUFDbEIsY0FBYyxFQUFFLENBQUM7WUFDakIsU0FBUyxFQUFFLENBQUM7WUFDWixnQkFBZ0IsRUFBRSxDQUFDO1NBQ3BCLENBQUM7OztJQUVGOzs7T0FHRztJQUNILDZCQUFNLEdBQU47UUFDRSxPQUFPLElBQUksa0JBQWtCLEVBQUUsQ0FBQztJQUNsQyxDQUFDOzs7Ozs7SUF6QlUsWUFBWTtRQUR4QixVQUFVLEVBQUU7T0FDQSxZQUFZO3VCQWhNekI7RUFnTWtDLGlCQUFpQjtTQUF0QyxZQUFZOztJQXNDdkI7UUFDRSxJQUNFLGlCQUFpQixDQUNmLFlBQVksQ0FBQyxZQUFZLEVBQUUsRUFDM0IsSUFBSSxFQUNKLFlBQVksQ0FBQyxhQUFhLEVBQUUsQ0FDN0IsS0FBSyxJQUFJLEVBQ1Y7WUFDQSxJQUFJLENBQUMsZUFBZSxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsU0FBUyxFQUFFLENBQUMsRUFBRSxDQUFDO1NBQ3pEO0lBQ0gsQ0FBQztJQWVELG1DQUFNLGFBQ0osT0FBZSxFQUNmLEdBQVcsRUFDWCxPQUEyQixFQUMzQixhQUF1QjtJQWtCekIscUNBQVEsYUFDTixNQUFjLEVBQ2QsTUFBYyxFQUNkLGFBQXVCLEVBQ3ZCLE9BQThCO0lBVWhDLHVDQUFVLGFBQUMsUUFBdUM7OztzREFBUTtnQkFDeEQsS0FBSSxDQUFDLGVBQWUsQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDO2FBQzVDOzs7SUFTRCxrQ0FBSzs7O0lBM0VNLGtCQUFrQjs7T0FBbEIsa0JBQWtCOzZCQW5PL0I7O1NBbU9hLGtCQUFrQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7XG4gIENvcmRvdmFJbnN0YW5jZSxcbiAgSW5zdGFuY2VDaGVjayxcbiAgSW9uaWNOYXRpdmVQbHVnaW4sXG4gIFBsdWdpbixcbiAgY2hlY2tBdmFpbGFiaWxpdHlcbn0gZnJvbSAnQGlvbmljLW5hdGl2ZS9jb3JlJztcblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVXBsb2FkT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgbmFtZSBvZiB0aGUgZm9ybSBlbGVtZW50LlxuICAgKiBEZWZhdWx0cyB0byAnZmlsZScuXG4gICAqL1xuICBmaWxlS2V5Pzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgZmlsZSBuYW1lIHRvIHVzZSB3aGVuIHNhdmluZyB0aGUgZmlsZSBvbiB0aGUgc2VydmVyLlxuICAgKiBEZWZhdWx0cyB0byAnaW1hZ2UuanBnJy5cbiAgICovXG4gIGZpbGVOYW1lPzogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCBtZXRob2QgdG8gdXNlIC0gZWl0aGVyIFBVVCBvciBQT1NULlxuICAgKiBEZWZhdWx0cyB0byBQT1NULlxuICAgKi9cbiAgaHR0cE1ldGhvZD86IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG1pbWUgdHlwZSBvZiB0aGUgZGF0YSB0byB1cGxvYWQuXG4gICAqIERlZmF1bHRzIHRvIGltYWdlL2pwZWcuXG4gICAqL1xuICBtaW1lVHlwZT86IHN0cmluZztcblxuICAvKipcbiAgICogQSBzZXQgb2Ygb3B0aW9uYWwga2V5L3ZhbHVlIHBhaXJzIHRvIHBhc3MgaW4gdGhlIEhUVFAgcmVxdWVzdC5cbiAgICovXG4gIHBhcmFtcz86IHsgW3M6IHN0cmluZ106IGFueSB9O1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRvIHVwbG9hZCB0aGUgZGF0YSBpbiBjaHVua2VkIHN0cmVhbWluZyBtb2RlLlxuICAgKiBEZWZhdWx0cyB0byB0cnVlLlxuICAgKi9cbiAgY2h1bmtlZE1vZGU/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBBIG1hcCBvZiBoZWFkZXIgbmFtZS9oZWFkZXIgdmFsdWVzLiBVc2UgYW4gYXJyYXkgdG8gc3BlY2lmeSBtb3JlXG4gICAqIHRoYW4gb25lIHZhbHVlLiBPbiBpT1MsIEZpcmVPUywgYW5kIEFuZHJvaWQsIGlmIGEgaGVhZGVyIG5hbWVkXG4gICAqIENvbnRlbnQtVHlwZSBpcyBwcmVzZW50LCBtdWx0aXBhcnQgZm9ybSBkYXRhIHdpbGwgTk9UIGJlIHVzZWQuXG4gICAqL1xuICBoZWFkZXJzPzogeyBbczogc3RyaW5nXTogYW55IH07XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgRmlsZVVwbG9hZFJlc3VsdCB7XG4gIC8qKlxuICAgKiBUaGUgbnVtYmVyIG9mIGJ5dGVzIHNlbnQgdG8gdGhlIHNlcnZlciBhcyBwYXJ0IG9mIHRoZSB1cGxvYWQuXG4gICAqL1xuICBieXRlc1NlbnQ6IG51bWJlcjtcblxuICAvKipcbiAgICogVGhlIEhUVFAgcmVzcG9uc2UgY29kZSByZXR1cm5lZCBieSB0aGUgc2VydmVyLlxuICAgKi9cbiAgcmVzcG9uc2VDb2RlOiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFRoZSBIVFRQIHJlc3BvbnNlIHJldHVybmVkIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICByZXNwb25zZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgSFRUUCByZXNwb25zZSBoZWFkZXJzIGJ5IHRoZSBzZXJ2ZXIuXG4gICAqL1xuICBoZWFkZXJzOiB7IFtzOiBzdHJpbmddOiBhbnkgfTtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBGaWxlVHJhbnNmZXJFcnJvciB7XG4gIC8qKlxuICAgKiBPbmUgb2YgdGhlIHByZWRlZmluZWQgZXJyb3IgY29kZXMgbGlzdGVkIGJlbG93LlxuICAgKi9cbiAgY29kZTogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHNvdXJjZS5cbiAgICovXG4gIHNvdXJjZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBVUkwgdG8gdGhlIHRhcmdldC5cbiAgICovXG4gIHRhcmdldDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBIVFRQIHN0YXR1cyBjb2RlLiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2VcbiAgICogY29kZSBpcyByZWNlaXZlZCBmcm9tIHRoZSBIVFRQIGNvbm5lY3Rpb24uXG4gICAqL1xuICBodHRwX3N0YXR1czogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBSZXNwb25zZSBib2R5LiBUaGlzIGF0dHJpYnV0ZSBpcyBvbmx5IGF2YWlsYWJsZSB3aGVuIGEgcmVzcG9uc2UgaXMgcmVjZWl2ZWQgZnJvbSB0aGUgSFRUUCBjb25uZWN0aW9uLlxuICAgKi9cbiAgYm9keTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBFaXRoZXIgZS5nZXRNZXNzYWdlIG9yIGUudG9TdHJpbmcuXG4gICAqL1xuICBleGNlcHRpb246IHN0cmluZztcbn1cblxuLyoqXG4gKiBAbmFtZSBGaWxlIFRyYW5zZmVyXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHVwbG9hZCBhbmQgZG93bmxvYWQgZmlsZXMuXG4gKlxuICogQGRlcHJlY2F0ZWRcbiAqIFRoaXMgcGx1Z2luIGhhcyBiZWVuIGRlcHJlY2F0ZWQgaW4gZmF2b3Igb2YgWEhSMlxuICogaHR0cHM6Ly9jb3Jkb3ZhLmFwYWNoZS5vcmcvYmxvZy8yMDE3LzEwLzE4L2Zyb20tZmlsZXRyYW5zZmVyLXRvLXhocjIuaHRtbFxuICpcbiAqIEB1c2FnZVxuICogYGBgdHlwZXNjcmlwdFxuICogaW1wb3J0IHsgRmlsZVRyYW5zZmVyLCBGaWxlVXBsb2FkT3B0aW9ucywgRmlsZVRyYW5zZmVyT2JqZWN0IH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlLXRyYW5zZmVyL25neCc7XG4gKiBpbXBvcnQgeyBGaWxlIH0gZnJvbSAnQGlvbmljLW5hdGl2ZS9maWxlJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHRyYW5zZmVyOiBGaWxlVHJhbnNmZXIsIHByaXZhdGUgZmlsZTogRmlsZSkgeyB9XG4gKlxuICogLi4uXG4gKlxuICogY29uc3QgZmlsZVRyYW5zZmVyOiBGaWxlVHJhbnNmZXJPYmplY3QgPSB0aGlzLnRyYW5zZmVyLmNyZWF0ZSgpO1xuICpcbiAqIC8vIFVwbG9hZCBhIGZpbGU6XG4gKiBmaWxlVHJhbnNmZXIudXBsb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gRG93bmxvYWQgYSBmaWxlOlxuICogZmlsZVRyYW5zZmVyLmRvd25sb2FkKC4uKS50aGVuKC4uKS5jYXRjaCguLik7XG4gKlxuICogLy8gQWJvcnQgYWN0aXZlIHRyYW5zZmVyOlxuICogZmlsZVRyYW5zZmVyLmFib3J0KCk7XG4gKlxuICogLy8gZnVsbCBleGFtcGxlXG4gKiB1cGxvYWQoKSB7XG4gKiAgIGxldCBvcHRpb25zOiBGaWxlVXBsb2FkT3B0aW9ucyA9IHtcbiAqICAgICAgZmlsZUtleTogJ2ZpbGUnLFxuICogICAgICBmaWxlTmFtZTogJ25hbWUuanBnJyxcbiAqICAgICAgaGVhZGVyczoge31cbiAqICAgICAgLi4uLi5cbiAqICAgfVxuICpcbiAqICAgZmlsZVRyYW5zZmVyLnVwbG9hZCgnPGZpbGUgcGF0aD4nLCAnPGFwaSBlbmRwb2ludD4nLCBvcHRpb25zKVxuICogICAgLnRoZW4oKGRhdGEpID0+IHtcbiAqICAgICAgLy8gc3VjY2Vzc1xuICogICAgfSwgKGVycikgPT4ge1xuICogICAgICAvLyBlcnJvclxuICogICAgfSlcbiAqIH1cbiAqXG4gKiBkb3dubG9hZCgpIHtcbiAqICAgY29uc3QgdXJsID0gJ2h0dHA6Ly93d3cuZXhhbXBsZS5jb20vZmlsZS5wZGYnO1xuICogICBmaWxlVHJhbnNmZXIuZG93bmxvYWQodXJsLCB0aGlzLmZpbGUuZGF0YURpcmVjdG9yeSArICdmaWxlLnBkZicpLnRoZW4oKGVudHJ5KSA9PiB7XG4gKiAgICAgY29uc29sZS5sb2coJ2Rvd25sb2FkIGNvbXBsZXRlOiAnICsgZW50cnkudG9VUkwoKSk7XG4gKiAgIH0sIChlcnJvcikgPT4ge1xuICogICAgIC8vIGhhbmRsZSBlcnJvclxuICogICB9KTtcbiAqIH1cbiAqXG4gKiBgYGBcbiAqXG4gKiBUbyBzdG9yZSBmaWxlcyBpbiBhIGRpZmZlcmVudC9wdWJsaWNseSBhY2Nlc3NpYmxlIGRpcmVjdG9yeSwgcGxlYXNlIHJlZmVyIHRvIHRoZSBmb2xsb3dpbmcgbGlua1xuICogaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlI3doZXJlLXRvLXN0b3JlLWZpbGVzXG4gKlxuICogQGludGVyZmFjZXNcbiAqIEZpbGVVcGxvYWRPcHRpb25zXG4gKiBGaWxlVXBsb2FkUmVzdWx0XG4gKiBGaWxlVHJhbnNmZXJFcnJvclxuICogQGNsYXNzZXNcbiAqIEZpbGVUcmFuc2Zlck9iamVjdFxuICovXG5AUGx1Z2luKHtcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2ZlcicsXG4gIHBsdWdpbjogJ2NvcmRvdmEtcGx1Z2luLWZpbGUtdHJhbnNmZXInLFxuICBwbHVnaW5SZWY6ICdGaWxlVHJhbnNmZXInLFxuICByZXBvOiAnaHR0cHM6Ly9naXRodWIuY29tL2FwYWNoZS9jb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGxhdGZvcm1zOiBbXG4gICAgJ0FtYXpvbiBGaXJlIE9TJyxcbiAgICAnQW5kcm9pZCcsXG4gICAgJ0Jyb3dzZXInLFxuICAgICdpT1MnLFxuICAgICdVYnVudHUnLFxuICAgICdXaW5kb3dzJyxcbiAgICAnV2luZG93cyBQaG9uZSdcbiAgXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBGaWxlVHJhbnNmZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBFcnJvciBjb2RlIHJlamVjdGVkIGZyb20gdXBsb2FkIHdpdGggRmlsZVRyYW5zZmVyRXJyb3JcbiAgICogRGVmaW5lZCBpbiBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICogICAgICBGSUxFX05PVF9GT1VORF9FUlI6IDEgICBSZXR1cm4gd2hlbiBmaWxlIHdhcyBub3QgZm91bmRcbiAgICogICAgICBJTlZBTElEX1VSTF9FUlI6IDIsICAgICBSZXR1cm4gd2hlbiB1cmwgd2FzIGludmFsaWRcbiAgICogICAgICBDT05ORUNUSU9OX0VSUjogMywgICAgICBSZXR1cm4gb24gY29ubmVjdGlvbiBlcnJvclxuICAgKiAgICAgIEFCT1JUX0VSUjogNCwgICAgICAgICAgIFJldHVybiBvbiBhYm9ydGluZ1xuICAgKiAgICAgIE5PVF9NT0RJRklFRF9FUlI6IDUgICAgIFJldHVybiBvbiAnMzA0IE5vdCBNb2RpZmllZCcgSFRUUCByZXNwb25zZVxuICAgKiBAZW51bSB7bnVtYmVyfVxuICAgKi9cbiAgRmlsZVRyYW5zZmVyRXJyb3JDb2RlID0ge1xuICAgIEZJTEVfTk9UX0ZPVU5EX0VSUjogMSxcbiAgICBJTlZBTElEX1VSTF9FUlI6IDIsXG4gICAgQ09OTkVDVElPTl9FUlI6IDMsXG4gICAgQUJPUlRfRVJSOiA0LFxuICAgIE5PVF9NT0RJRklFRF9FUlI6IDVcbiAgfTtcblxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBGaWxlVHJhbnNmZXIgb2JqZWN0XG4gICAqIEByZXR1cm4ge0ZpbGVUcmFuc2Zlck9iamVjdH1cbiAgICovXG4gIGNyZWF0ZSgpOiBGaWxlVHJhbnNmZXJPYmplY3Qge1xuICAgIHJldHVybiBuZXcgRmlsZVRyYW5zZmVyT2JqZWN0KCk7XG4gIH1cbn1cblxuLyoqXG4gKiBAaGlkZGVuXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi1maWxlLXRyYW5zZmVyJyxcbiAgcGx1Z2luTmFtZTogJ0ZpbGVUcmFuc2Zlcidcbn0pXG5leHBvcnQgY2xhc3MgRmlsZVRyYW5zZmVyT2JqZWN0IHtcbiAgcHJpdmF0ZSBfb2JqZWN0SW5zdGFuY2U6IGFueTtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBpZiAoXG4gICAgICBjaGVja0F2YWlsYWJpbGl0eShcbiAgICAgICAgRmlsZVRyYW5zZmVyLmdldFBsdWdpblJlZigpLFxuICAgICAgICBudWxsLFxuICAgICAgICBGaWxlVHJhbnNmZXIuZ2V0UGx1Z2luTmFtZSgpXG4gICAgICApID09PSB0cnVlXG4gICAgKSB7XG4gICAgICB0aGlzLl9vYmplY3RJbnN0YW5jZSA9IG5ldyAoRmlsZVRyYW5zZmVyLmdldFBsdWdpbigpKSgpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBTZW5kcyBhIGZpbGUgdG8gYSBzZXJ2ZXIuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlVXJsICBGaWxlc3lzdGVtIFVSTCByZXByZXNlbnRpbmcgdGhlIGZpbGUgb24gdGhlIGRldmljZSBvciBhIGRhdGEgVVJJLiBGb3IgYmFja3dhcmRzIGNvbXBhdGliaWxpdHksIHRoaXMgY2FuIGFsc28gYmUgdGhlIGZ1bGwgcGF0aCBvZiB0aGUgZmlsZSBvbiB0aGUgZGV2aWNlLlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdXJsICBVUkwgb2YgdGhlIHNlcnZlciB0byByZWNlaXZlIHRoZSBmaWxlLCBhcyBlbmNvZGVkIGJ5IGVuY29kZVVSSSgpLlxuICAgKiBAcGFyYW0ge0ZpbGVVcGxvYWRPcHRpb25zfSBbb3B0aW9uc10gIE9wdGlvbmFsIHBhcmFtZXRlcnMuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBzaW5jZSBBbmRyb2lkIHJlamVjdHMgc2VsZi1zaWduZWQgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBOb3QgcmVjb21tZW5kZWQgZm9yIHByb2R1Y3Rpb24gdXNlLiBTdXBwb3J0ZWQgb24gQW5kcm9pZCBhbmQgaU9TLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlVXBsb2FkUmVzdWx0Pn0gUmV0dXJucyBhIFByb21pc2UgdGhhdCByZXNvbHZlcyB0byBhIEZpbGVVcGxvYWRSZXN1bHQgYW5kIHJlamVjdHMgd2l0aCBGaWxlVHJhbnNmZXJFcnJvci5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIHVwbG9hZChcbiAgICBmaWxlVXJsOiBzdHJpbmcsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgb3B0aW9ucz86IEZpbGVVcGxvYWRPcHRpb25zLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuXG4gICk6IFByb21pc2U8RmlsZVVwbG9hZFJlc3VsdD4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBEb3dubG9hZHMgYSBmaWxlIGZyb20gc2VydmVyLlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gc291cmNlICBVUkwgb2YgdGhlIHNlcnZlciB0byBkb3dubG9hZCB0aGUgZmlsZSwgYXMgZW5jb2RlZCBieSBlbmNvZGVVUkkoKS5cbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhcmdldCAgRmlsZXN5c3RlbSB1cmwgcmVwcmVzZW50aW5nIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuIEZvciBiYWNrd2FyZHMgY29tcGF0aWJpbGl0eSwgdGhpcyBjYW4gYWxzbyBiZSB0aGUgZnVsbCBwYXRoIG9mIHRoZSBmaWxlIG9uIHRoZSBkZXZpY2UuXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3RydXN0QWxsSG9zdHNdICBPcHRpb25hbCBwYXJhbWV0ZXIsIGRlZmF1bHRzIHRvIGZhbHNlLiBJZiBzZXQgdG8gdHJ1ZSwgaXQgYWNjZXB0cyBhbGwgc2VjdXJpdHkgY2VydGlmaWNhdGVzLiBUaGlzIGlzIHVzZWZ1bCBiZWNhdXNlIEFuZHJvaWQgcmVqZWN0cyBzZWxmLXNpZ25lZCBzZWN1cml0eSBjZXJ0aWZpY2F0ZXMuIE5vdCByZWNvbW1lbmRlZCBmb3IgcHJvZHVjdGlvbiB1c2UuIFN1cHBvcnRlZCBvbiBBbmRyb2lkIGFuZCBpT1MuXG4gICAqIEBwYXJhbSB7b2JqZWN0fSBbT3B0aW9uYWxdIHBhcmFtZXRlcnMsIGN1cnJlbnRseSBvbmx5IHN1cHBvcnRzIGhlYWRlcnMgKHN1Y2ggYXMgQXV0aG9yaXphdGlvbiAoQmFzaWMgQXV0aGVudGljYXRpb24pLCBldGMpLlxuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fSBSZXR1cm5zIGEgUHJvbWlzZSB0aGF0IHJlc29sdmVzIHRvIGEgRmlsZUVudHJ5IG9iamVjdC5cbiAgICovXG4gIEBDb3Jkb3ZhSW5zdGFuY2Uoe1xuICAgIHN1Y2Nlc3NJbmRleDogMixcbiAgICBlcnJvckluZGV4OiAzXG4gIH0pXG4gIGRvd25sb2FkKFxuICAgIHNvdXJjZTogc3RyaW5nLFxuICAgIHRhcmdldDogc3RyaW5nLFxuICAgIHRydXN0QWxsSG9zdHM/OiBib29sZWFuLFxuICAgIG9wdGlvbnM/OiB7IFtzOiBzdHJpbmddOiBhbnkgfVxuICApOiBQcm9taXNlPGFueT4ge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZWdpc3RlcnMgYSBsaXN0ZW5lciB0aGF0IGdldHMgY2FsbGVkIHdoZW5ldmVyIGEgbmV3IGNodW5rIG9mIGRhdGEgaXMgdHJhbnNmZXJyZWQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGxpc3RlbmVyIExpc3RlbmVyIHRoYXQgdGFrZXMgYSBwcm9ncmVzcyBldmVudC5cbiAgICovXG4gIEBJbnN0YW5jZUNoZWNrKHsgc3luYzogdHJ1ZSB9KVxuICBvblByb2dyZXNzKGxpc3RlbmVyOiAoZXZlbnQ6IFByb2dyZXNzRXZlbnQpID0+IGFueSk6IHZvaWQge1xuICAgIHRoaXMuX29iamVjdEluc3RhbmNlLm9ucHJvZ3Jlc3MgPSBsaXN0ZW5lcjtcbiAgfVxuXG4gIC8qKlxuICAgKiBBYm9ydHMgYW4gaW4tcHJvZ3Jlc3MgdHJhbnNmZXIuIFRoZSBvbmVycm9yIGNhbGxiYWNrIGlzIHBhc3NlZCBhIEZpbGVUcmFuc2ZlckVycm9yXG4gICAqIG9iamVjdCB3aGljaCBoYXMgYW4gZXJyb3IgY29kZSBvZiBGaWxlVHJhbnNmZXJFcnJvci5BQk9SVF9FUlIuXG4gICAqL1xuICBAQ29yZG92YUluc3RhbmNlKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGFib3J0KCk6IHZvaWQge1xuICB9XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@ionic-native/image-picker/ngx/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/@ionic-native/image-picker/ngx/index.js ***!
  \**************************************************************/
/*! exports provided: OutputType, ImagePicker */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OutputType", function() { return OutputType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImagePicker", function() { return ImagePicker; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_native_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic-native/core */ "./node_modules/@ionic-native/core/index.js");



var OutputType;
(function (OutputType) {
    OutputType[OutputType["FILE_URL"] = 0] = "FILE_URL";
    OutputType[OutputType["DATA_URL"] = 1] = "DATA_URL";
})(OutputType || (OutputType = {}));
var ImagePicker = /** @class */ (function (_super) {
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"])(ImagePicker, _super);
    function ImagePicker() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePicker.prototype.getPictures = function (options) { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "getPictures", { "callbackOrder": "reverse" }, arguments); };
    ImagePicker.prototype.hasReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "hasReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.prototype.requestReadPermission = function () { return Object(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["cordova"])(this, "requestReadPermission", { "platforms": ["Android"] }, arguments); };
    ImagePicker.pluginName = "ImagePicker";
    ImagePicker.plugin = "cordova-plugin-telerik-imagepicker";
    ImagePicker.pluginRef = "window.imagePicker";
    ImagePicker.repo = "https://github.com/Telerik-Verified-Plugins/ImagePicker";
    ImagePicker.install = "ionic cordova plugin add cordova-plugin-telerik-imagepicker --variable PHOTO_LIBRARY_USAGE_DESCRIPTION=\"your usage message\"";
    ImagePicker.installVariables = ["PHOTO_LIBRARY_USAGE_DESCRIPTION"];
    ImagePicker.platforms = ["Android", "iOS"];
    ImagePicker = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ImagePicker);
    return ImagePicker;
}(_ionic_native_core__WEBPACK_IMPORTED_MODULE_2__["IonicNativePlugin"]));

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL2ltYWdlLXBpY2tlci9uZ3gvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDM0MsT0FBTyw4QkFBc0MsTUFBTSxvQkFBb0IsQ0FBQztBQXFEeEUsTUFBTSxDQUFOLElBQVksVUFHWDtBQUhELFdBQVksVUFBVTtJQUNwQixtREFBWSxDQUFBO0lBQ1osbURBQVEsQ0FBQTtBQUNWLENBQUMsRUFIVyxVQUFVLEtBQVYsVUFBVSxRQUdyQjs7SUF1Q2dDLCtCQUFpQjs7OztJQVVoRCxpQ0FBVyxhQUFDLE9BQTJCO0lBV3ZDLHVDQUFpQjtJQVdqQiwyQ0FBcUI7Ozs7Ozs7O0lBaENWLFdBQVc7UUFEdkIsVUFBVSxFQUFFO09BQ0EsV0FBVztzQkFoR3hCO0VBZ0dpQyxpQkFBaUI7U0FBckMsV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvcmRvdmEsIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG5cbmV4cG9ydCBpbnRlcmZhY2UgSW1hZ2VQaWNrZXJPcHRpb25zIHtcbiAgLyoqXG4gICAqIG1heCBpbWFnZXMgdG8gYmUgc2VsZWN0ZWQsIGRlZmF1bHRzIHRvIDE1LiBJZiB0aGlzIGlzIHNldCB0byAxLCB1cG9uIHNlbGVjdGlvbiBvZiBhIHNpbmdsZSBpbWFnZSwgdGhlIHBsdWdpbiB3aWxsIHJldHVybiBpdC4gKEFuZHJvaWQgb25seSlcbiAgICovXG4gIG1heGltdW1JbWFnZXNDb3VudD86IG51bWJlcjtcblxuICAvKipcbiAgICogTWF4IHdpZHRoIHRvIGFsbG93IGltYWdlcyB0byBiZVxuICAgKi9cbiAgd2lkdGg/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIE1heCBoZWlnaHQgdG8gYWxsb3cgaW1hZ2VzIHRvIGJlXG4gICAqL1xuICBoZWlnaHQ/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFF1YWxpdHkgb2YgaW1hZ2VzLCBkZWZhdWx0cyB0byAxMDBcbiAgICovXG4gIHF1YWxpdHk/OiBudW1iZXI7XG5cbiAgLyoqXG4gICAqIFZpZGVvcyBhbGxvd2VkP1xuICAgKi9cbiAgYWxsb3dfdmlkZW8/OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiB0aGUgZGVmYXVsdCBpcyB0aGUgbWVzc2FnZSBvZiB0aGUgb2xkIHBsdWdpbiBpbXBsXG4gICAqL1xuICB0aXRsZT86IHN0cmluZztcblxuICAvKipcbiAgICogdGhlIG9sZCBwbHVnaW4gaW1wbCBkaWRuJ3QgaGF2ZSBpdCwgc28gcGFzc2luZyBudWxsIGJ5IGRlZmF1bHRcbiAgICovXG4gIG1lc3NhZ2U/OiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIENob29zZSB0aGUgZm9ybWF0IG9mIHRoZSByZXR1cm4gdmFsdWUuXG4gICAqIERlZmluZWQgaW4gSW1hZ2VQaWNrZXIuT3V0cHV0VHlwZS4gRGVmYXVsdCBpcyBGSUxFX1VSSS5cbiAgICogICAgICBGSUxFX1VSSSA6IDAsICAgUmV0dXJuIGltYWdlIGZpbGUgVVJJLFxuICAgKiAgICAgIERBVEFfVVJMIDogMSwgICBSZXR1cm4gaW1hZ2UgYXMgYmFzZTY0LWVuY29kZWQgc3RyaW5nXG4gICAqL1xuICBvdXRwdXRUeXBlPzogbnVtYmVyO1xuXG4gIC8qKlxuICAgKiBEaXNhYmxlIHRoZSBpT1MgcG9wb3ZlciBhcyBzZWVuIG9uIGlQYWRcbiAgICovXG4gIGRpc2FibGVfcG9wb3Zlcj86IGJvb2xlYW47XG59XG5cbmV4cG9ydCBlbnVtIE91dHB1dFR5cGUge1xuICBGSUxFX1VSTCA9IDAsXG4gIERBVEFfVVJMXG59XG5cbi8qKlxuICogQG5hbWUgSW1hZ2UgUGlja2VyXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvcmRvdmEgUGx1Z2luIEZvciBNdWx0aXBsZSBJbWFnZSBTZWxlY3Rpb25cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLWltYWdlLXBpY2tlcmAuXG4gKiBGb3IgbW9yZSBpbmZvLCBwbGVhc2Ugc2VlIHRoZSBodHRwczovL2dpdGh1Yi5jb20vVGVsZXJpay1WZXJpZmllZC1QbHVnaW5zL0ltYWdlUGlja2VyXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBJbWFnZVBpY2tlciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvaW1hZ2UtcGlja2VyL25neCc7XG4gKlxuICpcbiAqIGNvbnN0cnVjdG9yKHByaXZhdGUgaW1hZ2VQaWNrZXI6IEltYWdlUGlja2VyKSB7IH1cbiAqXG4gKiAuLi5cbiAqXG4gKiB0aGlzLmltYWdlUGlja2VyLmdldFBpY3R1cmVzKG9wdGlvbnMpLnRoZW4oKHJlc3VsdHMpID0+IHtcbiAqICAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXN1bHRzLmxlbmd0aDsgaSsrKSB7XG4gKiAgICAgICBjb25zb2xlLmxvZygnSW1hZ2UgVVJJOiAnICsgcmVzdWx0c1tpXSk7XG4gKiAgIH1cbiAqIH0sIChlcnIpID0+IHsgfSk7XG4gKlxuICogYGBgXG4gKiBAaW50ZXJmYWNlc1xuICogSW1hZ2VQaWNrZXJPcHRpb25zXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnSW1hZ2VQaWNrZXInLFxuICBwbHVnaW46ICdjb3Jkb3ZhLXBsdWdpbi10ZWxlcmlrLWltYWdlcGlja2VyJyxcbiAgcGx1Z2luUmVmOiAnd2luZG93LmltYWdlUGlja2VyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9UZWxlcmlrLVZlcmlmaWVkLVBsdWdpbnMvSW1hZ2VQaWNrZXInLFxuICBpbnN0YWxsOiAnaW9uaWMgY29yZG92YSBwbHVnaW4gYWRkIGNvcmRvdmEtcGx1Z2luLXRlbGVyaWstaW1hZ2VwaWNrZXIgLS12YXJpYWJsZSBQSE9UT19MSUJSQVJZX1VTQUdFX0RFU0NSSVBUSU9OPVwieW91ciB1c2FnZSBtZXNzYWdlXCInLFxuICBpbnN0YWxsVmFyaWFibGVzOiBbJ1BIT1RPX0xJQlJBUllfVVNBR0VfREVTQ1JJUFRJT04nXSxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJ11cbn0pXG5ASW5qZWN0YWJsZSgpXG5leHBvcnQgY2xhc3MgSW1hZ2VQaWNrZXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBQaWNrIHBpY3R1cmVzIGZyb20gdGhlIGxpYnJhcnkuXG4gICAqIEBwYXJhbSB7SW1hZ2VQaWNrZXJPcHRpb25zfSBvcHRpb25zXG4gICAqIEByZXR1cm5zIHtQcm9taXNlPGFueT59IFJldHVybnMgYSBQcm9taXNlIHRoYXQgcmVzb2x2ZXMgdGhlIGltYWdlIGZpbGUgVVJJXG4gICAqIG90aGVyd2lzZSByZWplY3RzIHdpdGggYW4gZXJyb3IuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgY2FsbGJhY2tPcmRlcjogJ3JldmVyc2UnXG4gIH0pXG4gIGdldFBpY3R1cmVzKG9wdGlvbnM6IEltYWdlUGlja2VyT3B0aW9ucyk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIENoZWNrIGlmIHdlIGhhdmUgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxib29sZWFuPn0gUmV0dXJucyBhIHByb21pc2UgdGhhdCByZXNvbHZlcyB3aXRoIGEgYm9vbGVhbiB0aGF0IGluZGljYXRlcyB3aGV0aGVyIHdlIGhhdmUgcGVybWlzc2lvblxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgaGFzUmVhZFBlcm1pc3Npb24oKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcXVlc3QgcGVybWlzc2lvbiB0byByZWFkIGltYWdlc1xuICAgKiBAcmV0dXJucyB7UHJvbWlzZTxhbnk+fVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHBsYXRmb3JtczogWydBbmRyb2lkJ11cbiAgfSlcbiAgcmVxdWVzdFJlYWRQZXJtaXNzaW9uKCk6IFByb21pc2U8YW55PiB7XG4gICAgcmV0dXJuO1xuICB9XG5cbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-icon/manage-icon.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-icon/manage-icon.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header no-border>\n  <ion-toolbar  color=\"primary\" mode=\"ios\">\n\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"goBack()\">\n        <ion-icon class=\"bell-button\" src=\"assets/themify-icons/SVG/arrow-left.svg\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n\n    <ion-title>\n      {{ 'MANAGE_ICON.manage_icon' | translate }}\n    </ion-title>\n\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content>\n\n\n  <!-- Vehicle Profile -->\n  <ion-grid class=\"ion-no-padding header-container\">\n    <ion-row>\n\n      <ion-col size=\"12\">&nbsp;</ion-col>\n\n      <ion-col size=\"4\"></ion-col>\n      <ion-col class=\"ion-text-center item-avatar ion-align-self-center\" size=\"4\" routerLink=\"/deliveries\">\n        <ion-avatar>\n          <img *ngIf=\"!item_photo\" src=\"assets/google/marker/{{ item_icon }}.png\">\n          <img *ngIf=\"item_photo\" src=\"{{item_photo}}\">\n        </ion-avatar>\n      </ion-col>\n      <ion-col size=\"4\"></ion-col>\n\n\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"6\">\n        <ion-button shape=\"round\" expand=\"full\" color=\"light\" (click)=\"selectDevice()\">\n          {{ item_name }}\n          <ion-icon slot=\"end\" src=\"assets/themify-icons/SVG/exchange-vertical.svg\"></ion-icon>\n        </ion-button>\n      </ion-col>\n      <ion-col size=\"3\"></ion-col>\n      \n    </ion-row>\n  </ion-grid>\n\n\n  <!-- <ion-grid>\n    <ion-row>\n      <ion-col class=\"ion-text-center\" size=\"12\">\n        <ion-button expand=\"block\" color=\"success\" fill=\"outline\" (click)=\"cropUpload()\">\n          <ion-icon slot=\"start\" src=\"assets/themify-icons/SVG/camera.svg\"></ion-icon>\n          {{ 'MANAGE_ICON.photo_library' | translate }}\n        </ion-button>\n      </ion-col>\n    </ion-row> \n  </ion-grid> -->\n\n  <div class=\"square-container\">\n    <div class=\"square\" *ngFor=\"let item of itemList\" (click)=\"changeIcon(item.icon_name, item.icon_size)\">\n      <div [ngClass]=\"(item_icon==item.icon_name)?'content active':'content'\">\n        <img src=\"assets/google/marker/{{ item.icon_name }}.png\">\n      </div>\n    </div>\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/manage-icon/manage-icon-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/manage-icon/manage-icon-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: ManageIconPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageIconPageRoutingModule", function() { return ManageIconPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _manage_icon_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./manage-icon.page */ "./src/app/pages/manage-icon/manage-icon.page.ts");




const routes = [
    {
        path: '',
        component: _manage_icon_page__WEBPACK_IMPORTED_MODULE_3__["ManageIconPage"]
    }
];
let ManageIconPageRoutingModule = class ManageIconPageRoutingModule {
};
ManageIconPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], ManageIconPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/manage-icon/manage-icon.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-icon/manage-icon.module.ts ***!
  \*********************************************************/
/*! exports provided: ManageIconPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageIconPageModule", function() { return ManageIconPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var _manage_icon_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./manage-icon-routing.module */ "./src/app/pages/manage-icon/manage-icon-routing.module.ts");
/* harmony import */ var _manage_icon_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./manage-icon.page */ "./src/app/pages/manage-icon/manage-icon.page.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm2015/ngx-translate-core.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");











let ManageIconPageModule = class ManageIconPageModule {
};
ManageIconPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _manage_icon_routing_module__WEBPACK_IMPORTED_MODULE_5__["ManageIconPageRoutingModule"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_7__["TranslateModule"].forChild()
        ],
        providers: [
            _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_9__["ImagePicker"],
            _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransfer"],
            _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_8__["FileTransferObject"]
        ],
        declarations: [_manage_icon_page__WEBPACK_IMPORTED_MODULE_6__["ManageIconPage"]]
    })
], ManageIconPageModule);



/***/ }),

/***/ "./src/app/pages/manage-icon/manage-icon.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/manage-icon/manage-icon.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".list-ios {\n  margin-bottom: 0px;\n}\n\n.ion-top-padding {\n  margin-top: 25px;\n}\n\n.margin-bottom-25 {\n  margin-bottom: 20px;\n}\n\nion-avatar img {\n  background-color: #e9e9e9;\n  border: 4px solid #c1c1c1;\n  padding: 6px;\n}\n\n.square-container {\n  padding: 4px;\n}\n\n.square {\n  width: calc(100% / 3);\n  float: left;\n  position: relative;\n  padding-bottom: calc(100% / 3);\n}\n\n.square .content img {\n  width: 100%;\n}\n\n.square .content {\n  width: calc(100% - 8px);\n  height: calc(100% - 8px);\n  margin: 4px;\n  padding: 16px;\n  position: absolute;\n  color: white;\n  background-color: #e9e9e9;\n  border: 1px solid #c1c1c1;\n}\n\n.square .content.active {\n  border: 3px solid var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy90ZXBhZnJpbC9Eb2N1bWVudHMvZ29vZ2xlbWFwL3NyYy9hcHAvcGFnZXMvbWFuYWdlLWljb24vbWFuYWdlLWljb24ucGFnZS5zY3NzIiwic3JjL2FwcC9wYWdlcy9tYW5hZ2UtaWNvbi9tYW5hZ2UtaWNvbi5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxrQkFBQTtBQ0NKOztBRENBO0VBQ0ksZ0JBQUE7QUNFSjs7QURBQTtFQUNJLG1CQUFBO0FDR0o7O0FEREE7RUFDSSx5QkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtBQ0lKOztBREFBO0VBQ0ksWUFBQTtBQ0dKOztBREFBO0VBQ0kscUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSw4QkFBQTtBQ0dKOztBRERBO0VBQ0ksV0FBQTtBQ0lKOztBRERBO0VBQ0ksdUJBQUE7RUFDQSx3QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx5QkFBQTtBQ0lKOztBREFBO0VBQ0ksMENBQUE7QUNHSiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL21hbmFnZS1pY29uL21hbmFnZS1pY29uLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5saXN0LWlvc3tcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG59XG4uaW9uLXRvcC1wYWRkaW5ne1xuICAgIG1hcmdpbi10b3A6MjVweDtcbn1cbi5tYXJnaW4tYm90dG9tLTI1e1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5pb24tYXZhdGFyIGltZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICAgIGJvcmRlcjogNHB4IHNvbGlkICNjMWMxYzE7XG4gICAgcGFkZGluZzo2cHg7XG59XG5cblxuLnNxdWFyZS1jb250YWluZXIge1xuICAgIHBhZGRpbmc6IDRweDtcbiAgfVxuXG4uc3F1YXJlIHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwMCUgLyAzKTtcbn1cbi5zcXVhcmUgLmNvbnRlbnQgaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4uc3F1YXJlIC5jb250ZW50IHtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDhweCk7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgcGFkZGluZzogMTZweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MxYzFjMTtcbiAgICAvLyBib3gtc2hhZG93OiAwIDJweCA1cHggcmdiYSgwLCAwLCAwLCAwLjI2KTtcbn1cblxuLnNxdWFyZSAuY29udGVudC5hY3RpdmV7XG4gICAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSIsIi5saXN0LWlvcyB7XG4gIG1hcmdpbi1ib3R0b206IDBweDtcbn1cblxuLmlvbi10b3AtcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDI1cHg7XG59XG5cbi5tYXJnaW4tYm90dG9tLTI1IHtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLWF2YXRhciBpbWcge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICBib3JkZXI6IDRweCBzb2xpZCAjYzFjMWMxO1xuICBwYWRkaW5nOiA2cHg7XG59XG5cbi5zcXVhcmUtY29udGFpbmVyIHtcbiAgcGFkZGluZzogNHB4O1xufVxuXG4uc3F1YXJlIHtcbiAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xuICBmbG9hdDogbGVmdDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogY2FsYygxMDAlIC8gMyk7XG59XG5cbi5zcXVhcmUgLmNvbnRlbnQgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbi5zcXVhcmUgLmNvbnRlbnQge1xuICB3aWR0aDogY2FsYygxMDAlIC0gOHB4KTtcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4cHgpO1xuICBtYXJnaW46IDRweDtcbiAgcGFkZGluZzogMTZweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBjb2xvcjogd2hpdGU7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjMWMxYzE7XG59XG5cbi5zcXVhcmUgLmNvbnRlbnQuYWN0aXZlIHtcbiAgYm9yZGVyOiAzcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/pages/manage-icon/manage-icon.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/manage-icon/manage-icon.page.ts ***!
  \*******************************************************/
/*! exports provided: ManageIconPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManageIconPage", function() { return ManageIconPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/fesm2015/ionic-angular.js");
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/storage.service */ "./src/app/services/storage.service.ts");
/* harmony import */ var src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/request.service */ "./src/app/services/request.service.ts");
/* harmony import */ var src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/alert.service */ "./src/app/services/alert.service.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../select-device/select-device.page */ "./src/app/pages/select-device/select-device.page.ts");
/* harmony import */ var _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/crop/ngx */ "./node_modules/@ionic-native/crop/ngx/index.js");
/* harmony import */ var _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic-native/image-picker/ngx */ "./node_modules/@ionic-native/image-picker/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/ngx/index.js");














let ManageIconPage = class ManageIconPage {
    constructor(navCtrl, storageService, loadingController, requestService, alertService, imagePicker, crop, http, transfer, authService, modalController) {
        this.navCtrl = navCtrl;
        this.storageService = storageService;
        this.loadingController = loadingController;
        this.requestService = requestService;
        this.alertService = alertService;
        this.imagePicker = imagePicker;
        this.crop = crop;
        this.http = http;
        this.transfer = transfer;
        this.authService = authService;
        this.modalController = modalController;
        this.item_photo = '';
        this.itemList = [
            { "icon_name": "car-01", "icon_size": 40 },
            { "icon_name": "car-02", "icon_size": 40 },
            { "icon_name": "car-03", "icon_size": 40 },
            { "icon_name": "car-04", "icon_size": 40 },
            { "icon_name": "car-05", "icon_size": 40 },
            { "icon_name": "car-06", "icon_size": 40 },
            { "icon_name": "car-07", "icon_size": 40 },
            { "icon_name": "car-08", "icon_size": 40 },
            { "icon_name": "car-09", "icon_size": 40 },
            { "icon_name": "car-10", "icon_size": 40 },
            { "icon_name": "car-11", "icon_size": 40 },
            { "icon_name": "car-12", "icon_size": 40 },
            { "icon_name": "car-13", "icon_size": 40 },
            { "icon_name": "car-14", "icon_size": 40 },
            { "icon_name": "car-15", "icon_size": 40 },
            { "icon_name": "car-16", "icon_size": 40 },
            { "icon_name": "car-17", "icon_size": 40 },
            { "icon_name": "car-18", "icon_size": 40 },
            { "icon_name": "car-19", "icon_size": 40 },
            { "icon_name": "car-20", "icon_size": 40 },
            { "icon_name": "car-21", "icon_size": 40 },
            { "icon_name": "car-22", "icon_size": 40 },
            { "icon_name": "car-23", "icon_size": 40 },
            { "icon_name": "car-24", "icon_size": 40 },
            { "icon_name": "car-25", "icon_size": 40 },
            { "icon_name": "car-26", "icon_size": 40 },
            { "icon_name": "car-27", "icon_size": 40 },
            { "icon_name": "car-28", "icon_size": 40 },
            { "icon_name": "truck-01", "icon_size": 60 },
            { "icon_name": "truck-02", "icon_size": 60 },
            { "icon_name": "truck-03", "icon_size": 60 },
            { "icon_name": "truck-04", "icon_size": 60 },
            { "icon_name": "truck-05", "icon_size": 60 },
            { "icon_name": "truck-06", "icon_size": 60 },
            { "icon_name": "truck-07", "icon_size": 60 },
            { "icon_name": "truck-08", "icon_size": 60 },
            { "icon_name": "truck-09", "icon_size": 60 },
            { "icon_name": "truck-10", "icon_size": 60 },
            { "icon_name": "truck-11", "icon_size": 60 },
            { "icon_name": "truck-12", "icon_size": 60 },
            { "icon_name": "truck-13", "icon_size": 60 },
            { "icon_name": "truck-14", "icon_size": 60 },
            { "icon_name": "truck-15", "icon_size": 60 },
            { "icon_name": "truck-16", "icon_size": 60 },
            { "icon_name": "truck-17", "icon_size": 60 },
            { "icon_name": "truck-18", "icon_size": 60 },
            { "icon_name": "truck-19", "icon_size": 60 },
            { "icon_name": "truck-20", "icon_size": 60 },
            { "icon_name": "truck-21", "icon_size": 60 },
            { "icon_name": "truck-22", "icon_size": 60 },
            { "icon_name": "truck-23", "icon_size": 60 },
            { "icon_name": "truck-24", "icon_size": 60 },
            { "icon_name": "truck-25", "icon_size": 60 },
            { "icon_name": "truck-26", "icon_size": 60 },
            { "icon_name": "truck-27", "icon_size": 60 },
            { "icon_name": "bike-01", "icon_size": 40 },
            { "icon_name": "bike-02", "icon_size": 40 },
            { "icon_name": "bike-03", "icon_size": 40 },
            { "icon_name": "bike-04", "icon_size": 40 },
            { "icon_name": "bike-05", "icon_size": 40 },
            { "icon_name": "bike-06", "icon_size": 40 },
            { "icon_name": "bike-07", "icon_size": 40 },
            { "icon_name": "bike-08", "icon_size": 40 },
            { "icon_name": "bike-09", "icon_size": 40 },
            { "icon_name": "bike-10", "icon_size": 40 },
            { "icon_name": "bike-11", "icon_size": 40 },
            { "icon_name": "bike-12", "icon_size": 40 },
            { "icon_name": "bike-13", "icon_size": 40 },
            { "icon_name": "bike-14", "icon_size": 40 },
            { "icon_name": "bike-15", "icon_size": 40 },
            { "icon_name": "bike-16", "icon_size": 40 },
            { "icon_name": "bike-17", "icon_size": 40 },
            { "icon_name": "bike-18", "icon_size": 40 },
            { "icon_name": "tricycle-01", "icon_size": 40 },
            { "icon_name": "tricycle-02", "icon_size": 40 },
            { "icon_name": "tricycle-03", "icon_size": 40 },
            { "icon_name": "tricycle-04", "icon_size": 40 },
            { "icon_name": "tricycle-05", "icon_size": 40 },
            { "icon_name": "tricycle-06", "icon_size": 40 },
            { "icon_name": "tricycle-07", "icon_size": 40 },
            { "icon_name": "boat-01", "icon_size": 40 },
            { "icon_name": "boat-02", "icon_size": 40 },
            { "icon_name": "boat-03", "icon_size": 60 },
            { "icon_name": "boat-04", "icon_size": 60 },
            { "icon_name": "plane-01", "icon_size": 60 },
            { "icon_name": "plane-02", "icon_size": 60 },
            { "icon_name": "plane-03", "icon_size": 60 },
        ];
    }
    selectDevice() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            const assignItemModal = yield this.modalController.create({
                component: _select_device_select_device_page__WEBPACK_IMPORTED_MODULE_9__["SelectDevicePage"],
                componentProps: {
                    // groupItems: this.groupItems,
                    // groupID: this.groupID
                    moduleName: "module_icon"
                }
            });
            assignItemModal.onDidDismiss().then((res) => {
                this.selectedItems = res.data;
                // Present Preloading
                this.storageService.setItem().subscribe(res => {
                }, (err) => {
                    console.log(err);
                }, () => {
                    this.current_item = this.selectedItems;
                    this.deviceID = this.current_item.deviceid;
                    this.item_name = this.current_item.name;
                    this.item_icon = this.current_item.icon_name;
                    if (this.current_item.photo != '')
                        this.item_photo = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].IMAGE.THUMBNAIL + this.current_item.photo;
                });
            }).catch(err => {
                console.log(err);
            });
            return yield assignItemModal.present();
        });
    }
    ngOnInit() {
        this.storageService.setItem().subscribe(res => {
        }, (err) => {
            console.log(err);
        }, () => {
            this.current_item = this.storageService.current_item;
            this.deviceID = this.current_item.deviceid;
            this.item_name = this.current_item.name;
            this.item_icon = this.current_item.icon_name;
            if (this.current_item.photo != '')
                this.item_photo = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].IMAGE.THUMBNAIL + this.current_item.photo;
        });
    }
    changeIcon(iconName, iconSize) {
        this.presentLoadingWithOptions();
        this.item_icon = iconName;
        this.item_icon = iconName;
        this.requestService.setIcon(this.deviceID, iconName, iconSize).subscribe(res => {
            // status ok
            this.httpResponse = res;
        }, err => {
            if (err.error.message) {
                this.alertService.presentBottomToast(err.error.message, "danger");
            }
            else {
                this.alertService.presentBottomToast(err.message, "danger");
            }
            this.loading.dismiss();
        }, () => {
            this.loading.dismiss();
            this.alertService.presentBottomToast(this.httpResponse.message, "success");
            this.deviceID = this.current_item.deviceid;
            this.item_name = this.current_item.name;
            this.item_icon = this.current_item.icon_name;
            this.item_photo = '';
        });
    }
    cropUpload() {
        this.imagePicker.getPictures({ maximumImagesCount: 1, outputType: 0 }).then((results) => {
            for (let i = 0; i < results.length; i++) {
                this.crop.crop(results[i], { quality: 60, targetHeight: 1000 })
                    .then(newImage => {
                    this.presentLoadingWithOptions();
                    const headers = { 'Authorization': this.authService.token["token_type"] + " " + this.authService.token["access_token"] };
                    const fileTransfer = this.transfer.create();
                    const uploadOpts = {
                        fileKey: 'file',
                        fileName: newImage.substr(newImage.lastIndexOf('/') + 1),
                        httpMethod: 'POST',
                        headers: headers,
                        params: { deviceid: this.deviceID }
                    };
                    fileTransfer.upload(newImage, _environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].API_URL + 'item/set-photo', uploadOpts)
                        .then((data) => {
                        this.httpResponse = data;
                        this.loading.dismiss();
                        this.storageService.setItem(this.httpResponse.item).subscribe(res => {
                        }, (err) => {
                            console.log(err);
                        }, () => {
                            this.deviceID = this.storageService.current_item.deviceid;
                            this.item_name = this.storageService.current_item.name;
                            this.item_icon = this.storageService.current_item.icon_name;
                            this.item_photo = _environments_environment__WEBPACK_IMPORTED_MODULE_6__["ENDPOINT"].IMAGE.THUMBNAIL + this.storageService.current_item.photo;
                            alert(this.item_photo);
                        });
                    }, (err) => {
                        console.log("ERROR: ", err);
                    });
                }, error => console.error('Error cropping image', error));
            }
        }, (err) => { console.log(err); });
    }
    goBack() {
        this.navCtrl.navigateBack('dashboard/tabs/home');
    }
    presentLoadingWithOptions() {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function* () {
            this.loading = yield this.loadingController.create({
                duration: 15000,
                message: 'Please wait...',
                translucent: true,
                cssClass: 'custom-class custom-loading'
            });
            return yield this.loading.present();
        });
    }
};
ManageIconPage.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"] },
    { type: src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"] },
    { type: src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"] },
    { type: src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"] },
    { type: _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"] },
    { type: _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"] },
    { type: src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"] }
];
ManageIconPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-manage-icon',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./manage-icon.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/manage-icon/manage-icon.page.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./manage-icon.page.scss */ "./src/app/pages/manage-icon/manage-icon.page.scss")).default]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"],
        src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_3__["StorageService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["LoadingController"],
        src_app_services_request_service__WEBPACK_IMPORTED_MODULE_4__["RequestService"],
        src_app_services_alert_service__WEBPACK_IMPORTED_MODULE_5__["AlertService"],
        _ionic_native_image_picker_ngx__WEBPACK_IMPORTED_MODULE_11__["ImagePicker"],
        _ionic_native_crop_ngx__WEBPACK_IMPORTED_MODULE_10__["Crop"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"],
        _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_12__["FileTransfer"],
        src_app_services_auth_service__WEBPACK_IMPORTED_MODULE_8__["AuthService"],
        _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]])
], ManageIconPage);



/***/ })

}]);
//# sourceMappingURL=pages-manage-icon-manage-icon-module-es2015.js.map