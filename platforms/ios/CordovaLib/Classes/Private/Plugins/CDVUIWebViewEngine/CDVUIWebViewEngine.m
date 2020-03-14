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

#import "NSDictionary+CordovaPreferences.h"

#import <objc/message.h>


@property (nonatomic, strong, readwrite) UIView* engineWebView;


@end


@synthesize engineWebView = _engineWebView;

- (instancetype)initWithFrame:(CGRect)frame
{
    self = [super init];
    if (self) {
        
    }

    return self;
}

- (void)pluginInitialize
{
    // viewController would be available now. we attempt to set all possible delegates to it, by default

    [self updateSettings:self.commandDelegate.settings];
}

- (void)evaluateJavaScript:(NSString*)javaScriptString completionHandler:(void (^)(id, NSError*))completionHandler
{
    
    if (completionHandler) {
        completionHandler(ret, nil);
    }
}

- (id)loadRequest:(NSURLRequest*)request
{
    return nil;
}

- (id)loadHTMLString:(NSString*)string baseURL:(NSURL*)baseURL
{
    return nil;
}

- (NSURL*)URL
{
    
}

- (BOOL) canLoadRequest:(NSURLRequest*)request
{
    return (request != nil);
}

- (void)updateSettings:(NSDictionary*)settings
{
    
    id prefObj = nil;

    // By default, DisallowOverscroll is false (thus bounce is allowed)
    BOOL bounceAllowed = !([settings cordovaBoolSettingForKey:@"DisallowOverscroll" defaultValue:NO]);

    // prevent webView from bouncing
    if (!bounceAllowed) {
        for (id subview in self.webView.subviews) {
            if ([[subview class] isSubclassOfClass:[UIScrollView class]]) {
                ((UIScrollView*)subview).bounces = NO;
            }
        }
    }

    NSInteger paginationBreakingMode = 0; // default - UIWebPaginationBreakingModePage
    prefObj = [settings cordovaSettingForKey:@"PaginationBreakingMode"];
    if (prefObj != nil) {
        NSArray* validValues = @[@"page", @"column"];
        NSString* prefValue = [validValues objectAtIndex:0];

        if ([prefObj isKindOfClass:[NSString class]]) {
            prefValue = prefObj;
        }

        paginationBreakingMode = [validValues indexOfObject:[prefValue lowercaseString]];
        if (paginationBreakingMode == NSNotFound) {
            paginationBreakingMode = 0;
        }
    }
    
    NSInteger paginationMode = 0; // default - UIWebPaginationModeUnpaginated
    prefObj = [settings cordovaSettingForKey:@"PaginationMode"];
    if (prefObj != nil) {
        NSArray* validValues = @[@"unpaginated", @"lefttoright", @"toptobottom", @"bottomtotop", @"righttoleft"];
        NSString* prefValue = [validValues objectAtIndex:0];

        if ([prefObj isKindOfClass:[NSString class]]) {
            prefValue = prefObj;
        }

        paginationMode = [validValues indexOfObject:[prefValue lowercaseString]];
        if (paginationMode == NSNotFound) {
            paginationMode = 0;
        }
    }
    
}

- (void)updateWithInfo:(NSDictionary*)info
{

    if (settings && [settings isKindOfClass:[NSDictionary class]]) {
        [self updateSettings:settings];
    }
}

// This forwards the methods that are in the header that are not implemented here.
// Both WKWebView and  implement the below:
//     loadHTMLString:baseURL:
//     loadRequest:
- (id)forwardingTargetForSelector:(SEL)aSelector
{
    return _engineWebView;
}

- (UIView*)webView
{
    return self.engineWebView;
}

@end

#endif
