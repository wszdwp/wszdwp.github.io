---
title: ListView in Android
layout: post
tags: Android
published: true
---

ListView  


## ArrayAdapter  

### Init  

```java
ListView listView = (ListView) findViewById(R.id.lvItems);
ArrayAdapter<String> itemsAdapter = 
    new ArrayAdapter<String>(this, android.R.layout.simple_list_item_1, items);
listView.setAdapter(itemsAdapter);

```

### Display in ```getView```

```java
public class UsersAdapter extends ArrayAdapter<User> {
    public UsersAdapter(Context context, ArrayList<User> users) {
       super(context, 0, users);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
       // Get the data item for this position
       User user = getItem(position);    
       // Check if an existing view is being reused, otherwise inflate the view
       if (convertView == null) {
          convertView = LayoutInflater.from(getContext()).inflate(R.layout.item_user, parent, false);
       }
       // Lookup view for data population
       TextView tvName = (TextView) convertView.findViewById(R.id.tvName);
       TextView tvHome = (TextView) convertView.findViewById(R.id.tvHome);
       // Populate the data into the template view using the data object
       tvName.setText(user.name);
       tvHome.setText(user.hometown);

       convertView.setTag(User); 

       // Return the completed view to render on screen
       return convertView;
   }
}
```

### Deal with click

```java
listView.setOnItemClickListener(new AdapterView.OnItemClickListener() {
    public void onItemClick(AdapterView<?> parent, View view, int position, long id) {
        if (!waitForResponse) {
            final User user = (User) parent.getItemAtPosition(position);

        }
    }
});
```

### Improving Performance with the ViewHolder Pattern  

```java
public class UsersAdapter extends ArrayAdapter<User> {
    // View lookup cache
    private static class ViewHolder {
        TextView name;
        TextView home;
    }

    public UsersAdapter(Context context, ArrayList<User> users) {
       super(context, R.layout.item_user, users);
    }

    @Override
    public View getView(int position, View convertView, ViewGroup parent) {
       // Get the data item for this position
       User user = getItem(position);    
       // Check if an existing view is being reused, otherwise inflate the view
       ViewHolder viewHolder; // view lookup cache stored in tag
       if (convertView == null) {
          // If there's no view to re-use, inflate a brand new view for row
          viewHolder = new ViewHolder();
          LayoutInflater inflater = LayoutInflater.from(getContext());
          convertView = inflater.inflate(R.layout.item_user, parent, false);
          viewHolder.name = (TextView) convertView.findViewById(R.id.tvName);
          viewHolder.home = (TextView) convertView.findViewById(R.id.tvHome);
          // Cache the viewHolder object inside the fresh view
          convertView.setTag(viewHolder);
       } else {
           // View is being recycled, retrieve the viewHolder object from tag
           viewHolder = (ViewHolder) convertView.getTag();
       }
       // Populate the data from the data object via the viewHolder object 
       // into the template view.
       viewHolder.name.setText(user.name);
       viewHolder.home.setText(user.hometown);
       // Return the completed view to render on screen
       return convertView;
   }
}
```


## CursorAdapter

