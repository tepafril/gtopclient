/*
 Licensed to the Apache Software Foundation (ASF) under one
 or more contributor license agreements.  See the NOTICE file
 distributed with this work for additional information
 regarding copyright ownership.  The ASF licenses this file
 to you under the Apache License, Version 2.0 (the
 "License"); you may not use this file except in compliance
 with the License.  You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing,
 software distributed under the License is distributed on an
 "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 KIND, either express or implied.  See the License for the
 specific language governing permissions and limitations
 under the License.
 */

#if !WK_WEB_VIEW_ONLY

#import <Cordova/CDVViewController.h>
#import <Cordova/CDVCommandDelegateImpl.h>
#import <Cordova/CDVUserAgentUtil.h>
#import <objc/message.h>

/**
 When web application loads Add stuff to the DOM, mainly the user-defined settings from the Settings.plist file, and
 the device's data such as device ID, platform version, etc.
 */

/**
 Called when the webview finishes loading.  This stops the activity view.
 */


- (BOOL)defaultResourcePolicyForURL:(NSURL*)url
{
    /*
     * If a URL is being loaded that's a file url, just load it internally
     */
    if ([url isFileURL]) {
        return YES;
    }

    return NO;
}


@end

#endif
