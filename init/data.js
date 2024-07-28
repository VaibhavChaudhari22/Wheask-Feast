const sampleListings = [
        {
            title: "Butter Chicken",
            image: {
                url:" https://www.shutterstock.com/image-photo/tasty-butter-chicken-curry-dish-600nw-1153329448.jpg",
                filename: "butter-chicken.jpg"
            },
            description: "Creamy and rich chicken curry made with butter, tomatoes, and cream.",
            ingredients: "Chicken, Butter, Tomatoes, Cream, Garlic, Ginger, Garam Masala, Chili Powder, Salt",
            steps: "1. Marinate the chicken with yogurt, garlic, ginger, and spices.\n2. Cook the marinated chicken in a skillet until browned.\n3. In a separate pan, melt butter and sauté onions until golden.\n4. Add tomatoes and cook until soft.\n5. Blend the tomato mixture into a smooth sauce.\n6. Return the sauce to the pan and add cream and cooked chicken.\n7. Simmer until the chicken is cooked through.\n8. Garnish with fresh cilantro and serve with naan or rice."
        },
        {
            title: "Paneer Tikka",
            image: {
                url: "https://t4.ftcdn.net/jpg/05/20/08/67/360_F_520086700_0fYFa0RIaZCcSpH0zDcVNjzHm2NKcih1.jpg",
                filename: "paneer-tikka.jpg"
            },
            description: "Grilled paneer cubes marinated in a blend of spices and yogurt.",
            ingredients: "Paneer, Yogurt, Garlic, Ginger, Garam Masala, Turmeric, Chili Powder, Lemon Juice, Salt",
            steps: "1. Cut paneer into cubes.\n2. In a bowl, mix yogurt, garlic, ginger, and spices to make the marinade.\n3. Coat the paneer cubes with the marinade and let sit for at least 30 minutes.\n4. Preheat the grill and thread the paneer onto skewers.\n5. Grill the paneer until charred and cooked through.\n6. Serve with mint chutney and lemon wedges."
        },
        {
            title: "Biryani",
            image: {
                url: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph",
                filename: "biryani.jpg"
            },
            description: "Aromatic rice dish made with spices, meat, and saffron.",
            ingredients: "Basmati Rice, Chicken or Mutton, Yogurt, Onions, Tomatoes, Ginger, Garlic, Biryani Masala, Saffron, Ghee, Salt",
            steps: "1. Marinate the meat with yogurt, garlic, ginger, and spices.\n2. Cook the marinated meat until tender.\n3. In a separate pot, cook basmati rice with saffron.\n4. Layer the cooked meat and rice in a large pot.\n5. Cover and cook on low heat until the flavors meld together.\n6. Garnish with fried onions and fresh cilantro before serving."
        },
        {
            title: "Masoor Dal",
            image: {
                url: "https://media.istockphoto.com/id/1130228942/photo/indian-dal-traditional-indian-soup-lentils-indian-dhal-spicy-curry-in-bowl-spices-herbs.jpg?s=612x612&w=0&k=20&c=ciPGZR4hkLeUL-nRxY4iAh539zYLgUkNz82GG_nJG5A=",
                filename: "masoor-dal.jpg"
            },
            description: "Red lentil curry cooked with tomatoes, onions, and spices.",
            ingredients: "Red Lentils, Tomatoes, Onions, Garlic, Ginger, Turmeric, Cumin, Coriander, Salt",
            steps: "1. Rinse the lentils and cook them in water until soft.\n2. In a separate pan, sauté onions, garlic, and ginger.\n3. Add tomatoes and spices, and cook until the tomatoes are soft.\n4. Mix the cooked lentils with the tomato mixture.\n5. Simmer for 10-15 minutes to let the flavors meld.\n6. Serve hot with rice or roti."
        },
        {
            title: "Chole",
            image: {
                url: "https://t4.ftcdn.net/jpg/03/94/99/83/360_F_394998333_oUSrAfdOXSJVUFk9RUWMkbhLtIhx1jQf.jpg",
                filename: "chole.jpg"
            },
            description: "Spicy chickpea curry made with tomatoes, onions, and a blend of spices.",
            ingredients: "Chickpeas, Tomatoes, Onions, Garlic, Ginger, Garam Masala, Cumin, Coriander, Salt",
            steps: "1. Soak chickpeas overnight and cook until soft.\n2. In a pan, sauté onions, garlic, and ginger until golden.\n3. Add tomatoes and spices, and cook until the tomatoes are soft.\n4. Add the cooked chickpeas and simmer for 20-30 minutes.\n5. Garnish with fresh cilantro and serve with bhature or rice."
        },
        {
            title: "Dosa",
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcLLFCOjSc9TLICJ9myaFU0LPwM3diEelCHg&s",
                filename: "dosa.jpg"
            },
            description: "Crispy rice and lentil crepes served with coconut chutney and sambar.",
            ingredients: "Rice, Urad Dal, Fenugreek Seeds, Salt, Water",
            steps: "1. Soak rice, urad dal, and fenugreek seeds overnight.\n2. Grind the mixture into a smooth batter.\n3. Ferment the batter overnight.\n4. Heat a griddle and spread a ladleful of batter into a thin circle.\n5. Cook until the dosa is crispy and golden.\n6. Serve hot with coconut chutney and sambar."
        },
        {
            title: "Samosa",
            image: {
                url: "https://cdn.pixabay.com/photo/2024/02/17/01/45/ai-generated-8578594_1280.jpg",
                filename: "samosa.jpg"
            },
            description: "Fried pastry filled with spiced potatoes, peas, and herbs.",
            ingredients: "Potatoes, Peas, Onions, Garlic, Ginger, Cumin, Coriander, Garam Masala, Flour, Oil, Salt",
            steps: "1. Boil and mash the potatoes.\n2. In a pan, sauté onions, garlic, and ginger.\n3. Add peas and spices, and cook until the peas are tender.\n4. Mix the mashed potatoes with the pea mixture.\n5. Make a dough with flour, water, and salt, and roll it into small circles.\n6. Fill the dough circles with the potato mixture and fold into triangles.\n7. Fry the samosas until golden and crispy.\n8. Serve hot with tamarind chutney."
        },
        {
            title: "Palak Paneer",
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSr4cVus_ELO4946U_nnc3PDCtgg29qhZpUpACnM3VQ1kopaxa7prTV9z7EPQ&s",
                filename: "palak-paneer.jpg"
            },
            description: "Paneer cubes cooked in a creamy spinach sauce.",
            ingredients: "Paneer, Spinach, Onions, Garlic, Ginger, Tomatoes, Cream, Cumin, Coriander, Salt",
            steps: "1. Blanch the spinach and blend into a smooth puree.\n2. In a pan, sauté onions, garlic, and ginger.\n3. Add tomatoes and cook until soft.\n4. Mix in the spinach puree and cream.\n5. Add paneer cubes and simmer for 10-15 minutes.\n6. Serve hot with naan or rice."
        },
        {
            title: "Aloo Gobi",
            image: {
                url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI5o4cbbKeoVMtRVB6aV1B9VZtt_VzDFSOoA&s",
                filename: "aloo-gobi.jpg"
            },
            description: "Potato and cauliflower curry made with spices and tomatoes.",
            ingredients: "Potatoes, Cauliflower, Tomatoes, Onions, Garlic, Ginger, Turmeric, Cumin, Coriander, Salt",
            steps: "1. In a pan, sauté onions, garlic, and ginger until golden.\n2. Add tomatoes and spices, and cook until the tomatoes are soft.\n3. Add potatoes and cauliflower, and cook until tender.\n4. Garnish with fresh cilantro and serve hot with rice or roti."
        },
        {
            title: "Gulab Jamun",
            image: {
                url: "https://images.news18.com/ibnlive/uploads/2024/02/untitled-design-2024-02-13t044803.673-2024-02-98586411c5a45dc78a02a07f4cb899fe.jpg?impolicy=website&width=640&height=480",
                filename: "gulab-jamun.jpg"
            },
            description: "Sweet deep-fried dough balls soaked in sugar syrup.",
            ingredients: "Milk Powder, Flour, Baking Powder, Milk, Ghee, Sugar, Water, Cardamom, Rose Water",
            steps: "1. Make a dough with milk powder, flour, baking powder, and milk.\n2. Shape the dough into small balls.\n3. Fry the dough balls in ghee until golden.\n4. Make a sugar syrup with sugar, water, cardamom, and rose water.\n5. Soak the fried dough balls in the sugar syrup.\n6. Serve warm or at room temperature."
        },
            {
                title: "Lamb Rogan Josh",
                image: {
                    url: "https://media.istockphoto.com/id/1253934130/photo/mutton-masala-curry-in-plastic-container-for-home-delivery.jpg?s=612x612&w=0&k=20&c=KQTQTS9RK7f4wt1_ZgRuvFsUMvc2MP1GF3yQqgaVShQ=",
                    filename: "lamb-rogan-josh.jpg"
                },
                description: "Aromatic lamb curry with a blend of spices and yogurt.",
                ingredients: "Lamb, Yogurt, Onions, Garlic, Ginger, Garam Masala, Kashmiri Chili Powder, Cumin, Coriander, Salt",
                steps: "1. Marinate the lamb with yogurt, garlic, ginger, and spices.\n2. Cook the marinated lamb in a skillet until browned.\n3. In a separate pot, sauté onions until golden.\n4. Add the cooked lamb and enough water to cover.\n5. Simmer until the lamb is tender and the sauce is thick.\n6. Serve hot with naan or rice."
            },
            {
                title: "Hyderabadi Biryani",
                image: {
                    url: "https://img.freepik.com/free-photo/gourmet-chicken-biryani-with-steamed-basmati-rice-generated-by-ai_188544-13480.jpg?size=626&ext=jpg&ga=GA1.1.2008272138.1721606400&semt=sph",
                    filename: "hyderabadi-biryani.jpg"
                },
                description: "Flavorful biryani made with basmati rice, meat, and aromatic spices.",
                ingredients: "Basmati Rice, Chicken or Mutton, Yogurt, Onions, Garlic, Ginger, Biryani Masala, Saffron, Ghee, Mint, Coriander",
                steps: "1. Marinate the meat with yogurt, garlic, ginger, and spices.\n2. Cook the marinated meat until tender.\n3. Cook basmati rice with saffron in a separate pot.\n4. Layer the cooked meat and rice in a large pot.\n5. Cover and cook on low heat until the flavors meld together.\n6. Garnish with fried onions, mint, and coriander before serving."
            },
            {
                title: "Rasam",
                image: {
                    url: "https://t4.ftcdn.net/jpg/04/88/62/89/360_F_488628993_XehLpKssgGtdrvk9YpDbtQXKP8xnPf9A.jpg",
                    filename: "rasam.jpg"
                },
                description: "Spicy and tangy South Indian soup made with tamarind and spices.",
                ingredients: "Tamarind, Tomatoes, Toor Dal, Mustard Seeds, Cumin, Garlic, Curry Leaves, Black Pepper, Turmeric, Coriander",
                steps: "1. Soak tamarind in water and extract the juice.\n2. Cook toor dal until soft and mash.\n3. In a pot, heat oil and add mustard seeds, cumin, garlic, and curry leaves.\n4. Add tomatoes and cook until soft.\n5. Add tamarind juice, mashed toor dal, and spices.\n6. Simmer until the flavors meld.\n7. Serve hot with rice."
            },
            {
                title: "Pav Bhaji",
                image: {
                    url: "https://media.istockphoto.com/id/1155185428/photo/indian-spicy-food-paav-bhaji-or-pav-bhaji.jpg?s=612x612&w=0&k=20&c=AMT1hmTm1xhTT0KmGsGPRyU6cPe-HFJuvkOgiT0m3Jo=",
                    filename: "pav-bhaji.jpg"
                },
                description: "Spicy vegetable mash served with buttered bread rolls.",
                ingredients: "Potatoes, Peas, Tomatoes, Onions, Bell Peppers, Garlic, Ginger, Pav Bhaji Masala, Butter, Bread Rolls",
                steps: "1. Boil and mash the potatoes and peas.\n2. In a pan, sauté onions, garlic, and ginger until golden.\n3. Add tomatoes and bell peppers, and cook until soft.\n4. Mix in the mashed vegetables and spices.\n5. Cook until the mixture thickens.\n6. Serve hot with buttered bread rolls."
            },
            {
                title: "Vada Pav",
                image: {
                    url: "https://media.istockphoto.com/id/1329213718/photo/vada-pav.webp?b=1&s=170667a&w=0&k=20&c=mg_rqOSDW2-UYk6Tk33NjC6gXIcgQ9SWT1W1LsfTnYs=",
                    filename: "vada-pav.jpg"
                },
                description: "Spicy potato fritter served in a bread roll with chutneys.",
                ingredients: "Potatoes, Green Chilies, Garlic, Ginger, Coriander, Cumin, Turmeric, Bread Rolls, Besan (Gram Flour), Oil, Salt",
                steps: "1. Boil and mash the potatoes.\n2. Mix in green chilies, garlic, ginger, and spices.\n3. Shape the mixture into patties.\n4. Coat the patties in a besan batter and deep-fry until golden.\n5. Serve the fritters in bread rolls with chutneys."
            },
            {
                title: "Kheer",
                image: {
                    url: "https://t4.ftcdn.net/jpg/05/90/56/95/360_F_590569598_IDZfJFEo1sYhYWTdundqtkhwD7oAg8vt.jpg",
                    filename: "kheer.jpg"
                },
                description: "Creamy rice pudding flavored with cardamom and saffron.",
                ingredients: "Rice, Milk, Sugar, Cardamom, Saffron, Nuts (Almonds, Pistachios), Raisins",
                steps: "1. Wash and soak the rice for 30 minutes.\n2. In a pot, bring milk to a boil.\n3. Add the rice and cook on low heat until soft.\n4. Stir in sugar, cardamom, and saffron.\n5. Cook until the mixture thickens.\n6. Garnish with nuts and raisins before serving."
            },
            {
                title: "Pani Puri",
                image: {
                    url: "https://media.istockphoto.com/id/525416827/photo/pani-puri-golgappe-chat-item-india.jpg?s=612x612&w=0&k=20&c=tOCmN28AXHIe3SMBgszWU6PLUD6w6CU6q8yMdwSAKPw=",
                    filename: "pani-puri.jpg"
                },
                description: "Crispy puris filled with spicy and tangy flavored water.",
                ingredients: "Puris, Potatoes, Chickpeas, Tamarind, Mint, Coriander, Green Chilies, Cumin, Black Salt, Chaat Masala",
                steps: "1. Boil and mash the potatoes and chickpeas.\n2. In a blender, combine tamarind, mint, coriander, green chilies, cumin, and spices to make the flavored water.\n3. Fill the puris with the potato-chickpea mixture.\n4. Serve with the flavored water."
            },
            {
                title: "Rogan Josh",
                image: {
                    url: "https://i.ytimg.com/vi/-dh_uGahzYo/maxresdefault.jpg",
                    filename: "rogan-josh.jpg"
                },
                description: "Fragrant lamb curry cooked with a variety of spices.",
                ingredients: "Lamb, Yogurt, Onions, Garlic, Ginger, Garam Masala, Kashmiri Chili Powder, Cumin, Coriander, Salt",
                steps: "1. Marinate the lamb with yogurt, garlic, ginger, and spices.\n2. Cook the marinated lamb in a skillet until browned.\n3. In a separate pot, sauté onions until golden.\n4. Add the cooked lamb and enough water to cover.\n5. Simmer until the lamb is tender and the sauce is thick.\n6. Serve hot with naan or rice."
            },
            {
                title: "Mango Lassi",
                image: {
                    url: "https://media.istockphoto.com/id/1365859011/photo/drink-mango-lassi-in-two-glasses-on-rustic-concrete-table-with-fresh-ripe-cut-manfo-from-above.jpg?s=612x612&w=0&k=20&c=uHnr_0raQDe2sgUYHdP5GSa2raaj3ILG4m1cmFHtVJA=",
                    filename: "mango-lassi.jpg"
                },
                description: "Refreshing yogurt-based drink flavored with mango.",
                ingredients: "Mango Pulp, Yogurt, Milk, Sugar, Cardamom",
                steps: "1. Blend together mango pulp, yogurt, milk, sugar, and cardamom until smooth.\n2. Serve chilled."
            },
            {
                title: "Chicken 65",
                image: {
                    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoozCjLTvxdpiY1nTTvq0OuzcUvZYgrJPOyQ&s",
                    filename: "chicken-65.jpg"
                },
                description: "Spicy and crispy fried chicken pieces.",
                ingredients: "Chicken, Yogurt, Garlic, Ginger, Red Chili Powder, Curry Leaves, Cornstarch, Lemon Juice, Salt, Oil",
                steps: "1. Marinate the chicken with yogurt, garlic, ginger, red chili powder, and salt.\n2. Coat the marinated chicken with cornstarch.\n3. Deep-fry the chicken pieces until crispy.\n4. Garnish with curry leaves and lemon juice before serving."
            }   
    
    
];

module.exports = { data: sampleListings };