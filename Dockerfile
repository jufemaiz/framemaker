FROM ruby:2.6

RUN apt-get update -qq \
  && apt-get install -y build-essential libpq-dev nodejs \
  && mkdir /app

WORKDIR /app

COPY Gemfile /app/Gemfile
COPY Gemfile.lock /app/Gemfile.lock

RUN bundle install

COPY . /app

EXPOSE 3000

ENTRYPOINT bundle exec

CMD rerun --background "bundle exec rackup -p 3000 -o '0.0.0.0'"
