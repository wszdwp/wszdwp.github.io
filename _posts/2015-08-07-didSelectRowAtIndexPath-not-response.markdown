#didSelectRowAtIndexPath method not called 

If you add UITapGestureRecognizer in your viewController, you need to set **cancelsTouchesInView** of your UITapGestureRecognizer to **false**, otherwise it will eat up your tap event.