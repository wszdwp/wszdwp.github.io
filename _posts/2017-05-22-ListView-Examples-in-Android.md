---
title: SimpleCursorAdapter and CursorAdapterexample Examples in ListView of Android
layout: post
tags: Android
published: false
---

# SimpleCursorAdapter example

1. 


```java
// private LayoutInflater inflater;
// private MyCursorAdapter myDemoCursorAdapter;
//...

    private void displayDemoList(){
        Cursor cursor = myDemoDB.getDemoList();
        if (cursor != null) {
            String[] from = new String[] {
                    MyDemoDB.KEY_SEQNO,
                    MyDemoDB.KEY_TOTAL_PAGES,
                    };  

            int[] to = new int[] {  
                    R.id.seqNo,
                    R.id.totalPages};

            myDemoCursorAdapter = new MyCursorAdapter(this, 
                R.layout.demo_row, cursor, from, to, 
                SimpleCursorAdapter.FLAG_REGISTER_CONTENT_OBSERVER);
            mListView.setAdapter(myDemoCursorAdapter);
            myDemoCursorAdapter.notifyDataSetChanged();
            
            mListView.setOnItemClickListener(new OnItemClickListener() {
                public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
                    Cursor cursor = (Cursor) mListView.getItemAtPosition(position);
                    // TODO - action when tap on row
                    return;
                }
            });
        }

    }

    private class MyCursorAdapter extends SimpleCursorAdapter {

        public MyCursorAdapter(Context context, int layout, Cursor c,
                String[] from, int[] to, int flags) {
            super(context, layout, c, from, to, flags);
            inflater = LayoutInflater.from(context);
        }

        @Override
        public View newView(Context context, Cursor cursor, ViewGroup parent) {
            return inflater.inflate(R.layout.demo_row, parent, false);
        }

        @Override
        public void bindView(View view, Context context, Cursor cursor) {
            super.bindView(view, context, cursor);

            MyDemoData myDemoData = MyDemoDB.getData(cursor);
            view.setTag(myDemoData);

            TextView title = (TextView) view.findViewById(R.id.title);
            TextView description = (TextView)view.findViewById(R.id.description);
            TextView date = (TextView) view.findViewById(R.id.date);

            title.setText(myDemoData.getTitle());
            description.setText(myDemoData.getDescription());
            date.setText(myDemoData.getDate());  
        }

        @Override
        public View getView(int position, View convertView, ViewGroup parent) {
            View view = super.getView(position, convertView, parent);

            if(position % 2 == 0){
                view.setBackgroundColor(Color.rgb(247, 248, 253));
            }
            else {
                view.setBackgroundColor(Color.rgb(255, 255, 255));
            }
            return view;
        }
    }
```

2. Reuse your cell with viewHolder



Refs:  
[stackoverflow 1](https://stackoverflow.com/questions/2398767/trying-to-override-getview-in-a-simplecursoradapter-gives-nullpointerexceptio)  
[ref 2](http://www.bkjia.com/Androidjc/1202887.html) 
[stackoverflow 2](https://stackoverflow.com/documentation/android/8711/performance-optimization/27172/save-view-lookups-with-the-viewholder-pattern#t=201705221355150476597)