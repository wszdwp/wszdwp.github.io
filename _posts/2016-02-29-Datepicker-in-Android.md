---
title: Datepicker in Android
layout: post
tags: Android
---

# DatePicker

{% highlight java %}
private void showDatePickerDialog(View v) {
    calendar = Calendar.getInstance();  //currentDateTime
    DatePickerDialog dialog = new DatePickerDialog(this, 
            onDateSetHandeler, 
            calendar.get(Calendar.YEAR), 
            calendar.get(Calendar.MONTH),
            calendar.get(Calendar.DAY_OF_MONTH));
    dialog.getDatePicker().setMinDate(System.currentTimeMillis() - 1000);
    dialog.show();
}

private DatePickerDialog.OnDateSetListener onDateSetHandeler = new DatePickerDialog.OnDateSetListener() {
       @Override
       public void onDateSet(DatePicker view, int year, int monthOfYear,int dayOfMonth) {
           calendar.set(year, monthOfYear, dayOfMonth); 
           String myDateString = dateFormat.format(calendar.getTime());
           myDateTextView.setText(myDateString);
       }
    };
{% endhighlight %}

## Set up a different time, eg: next year
{% highlight java %}
calendar.add(Calendar.YEAR, 1);
{% endhighlight %}

## Date to String 
{% highlight java %}
Date nextYear = calendar.getTime();
SimpleDateFormat dateFormat = new SimpleDateFormat("MM/dd/yyyy", Locale.US);
String nextYearString = dateFormat.format(nextYear);
{% endhighlight %}

## Notice: use get in calendar date since java.util.Date getYear() method is deprecated
{% highlight java %}
int year = calendar.get(Calendar.YEAR); 
int month = calendar.get(Calendar.MONTH);
int day = calendar.get(Calendar.DAY_OF_MONTH));
{% endhighlight %}
 