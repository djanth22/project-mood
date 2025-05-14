CREATE TABLE IF NOT EXISTS moodusers(
  id SERIAL PRIMARY KEY,
  userID TEXT UNIQUE,
  user_name TEXT,
  bio TEXT,
  join_date DATE DEFAULT (CURRENT_DATE)
);

CREATE TABLE IF NOT EXISTS moodposts(
    id SERIAL PRIMARY KEY,
    name TEXT,
    post TEXT,
    posted_at TIMESTAMP DEFAULT NOW(),
    user_id TEXT REFERENCES moodusers(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS moodcomments (
    id SERIAL PRIMARY KEY,
    name TEXT ,
    comment TEXT,
    posted_at TIMESTAMP DEFAULT NOW(),
    post_id INTEGER REFERENCES moodposts(id) ON DELETE CASCADE,
    user_id TEXT REFERENCES moodusers(userID) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS follow(
  id SERIAL PRIMARY KEY,
  er_ing TEXT UNIQUE,
  following TEXT,
  follow Boolean,
  follower_fkey TEXT 
);

CREATE TABLE IF NOT EXISTS postlikes(
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  likes BOOLEAN,
  dislikes BOOLEAN,
  uni TEXT UNIQUE,
  post_id INTEGER REFERENCES moodposts (id)
);

CREATE TABLE IF NOT EXISTS commentlikes(
  id SERIAL PRIMARY KEY,
  user_name TEXT,
  likes BOOLEAN,
  dislikes BOOLEAN,
  uni TEXT UNIQUE,
  comments_id INTEGER REFERENCES moodcomments (id)
);