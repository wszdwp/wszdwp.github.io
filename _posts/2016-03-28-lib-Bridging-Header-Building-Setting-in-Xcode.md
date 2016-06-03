CGRect  viewRect = CGRectMake(10, 10, 100, 100);
UIView* myView = [[UIView alloc] initWithFrame:viewRect];

//:configuration = Debug
SWIFT_OBJC_BRIDGING_HEADER = $(SRCROOT)/$(PROJECT_NAME)/$(PROJECT_NAME)-Bridging-Header.h 


//:configuration = Release
SWIFT_OBJC_BRIDGING_HEADER = $(SRCROOT)/$(PROJECT_NAME)/$(PROJECT_NAME)-Bridging-Header.h 


//:completeSettings = some
SWIFT_OBJC_BRIDGING_HEADER


#ifndef S2kMobileForms_S2kMobileForms_Bridging_Header_h
#define S2kMobileForms_S2kMobileForms_Bridging_Header_h


#endif

#import "Reachability.h"
#import <CommonCrypto/CommonCrypto.h>
#import "sqlite3.h"
#import <YAJLiOS/YAJL.h>
#import "SignatureViewController.h"
