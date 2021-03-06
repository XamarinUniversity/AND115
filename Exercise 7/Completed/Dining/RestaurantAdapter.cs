﻿using System.Collections.Generic;
using Android.Views;
using Android.Support.V7.Widget;
using System;

namespace Dining
{
	public class RestaurantAdapter : RecyclerView.Adapter
	{
		public event EventHandler<int> ItemClick;

		List<Restaurant> restaurants;

		public RestaurantAdapter(List<Restaurant> restaurants)
		{
			this.restaurants = restaurants;
		}

		public override int ItemCount {	get { return restaurants.Count; } }

		public override RecyclerView.ViewHolder OnCreateViewHolder(ViewGroup parent, int viewType)
		{
			var layout = LayoutInflater.From(parent.Context).Inflate(Resource.Layout.Restaurant, parent, false);
			
			return new RestaurantViewHolder(layout, OnItemClick);
		}

		public override void OnBindViewHolder(RecyclerView.ViewHolder holder, int position)
		{
			var vh = (RestaurantViewHolder)holder;

			vh.Name.Text     = restaurants[position].Name;
			vh.Rating.Rating = restaurants[position].Rating;
		}

		void OnItemClick(int position)
		{
			if (ItemClick != null)
				ItemClick(this, position);
		}
	}
}

